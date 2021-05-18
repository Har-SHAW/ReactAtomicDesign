import React, { useEffect } from "react";
import NavigationBar from "../../molecules/NavigationBar/index";
import ItemsList from "../../organisms/ItemList";
import TablesList from "../../organisms/TablesList";
import HomeTemplate from "../../templates/HomeTemplate";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../../../features/waiterServingsList";
import { useHistory } from "react-router";
import UserDetails from "../../molecules/UserDetails";
import LoginButton from "../../atoms/User/LoginButton";
import { Box } from "@material-ui/core";
const axios = require("axios");

const HomePage = (props) => {
    const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
        useAuth0();

    const tableData = useSelector((state) => state.tableList);

    const dispatch = useDispatch();

    const history = useHistory();

    const waiterData = useSelector((state) => ({
        name: state.waiterServingsList.name,
        email: state.waiterServingsList.email,
        picture: state.waiterServingsList.picture,
    }));

    useEffect(() => {
        if (!isLoading && isAuthenticated && !waiterData.name) {
            dispatch(
                saveUser({
                    name: user.given_name,
                    picture: user.picture,
                    email: user.email,
                })
            );
        }
    });

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <HomeTemplate
            navigationBarComponent={
                <NavigationBar
                    logoClick={() => history.replace("/")}
                    rightComponent={
                        <Box style={{ marginRight: "5vw" }}>
                            {waiterData.name ? (
                                <UserDetails
                                    user={waiterData}
                                    profileClick={() =>
                                        history.push("/profile")
                                    }
                                    handleClick={handleClick}
                                    handleClose={handleClose}
                                    anchorEl={anchorEl}
                                    logout={() =>
                                        logout({
                                            returnTo: window.location.origin,
                                        })
                                    }
                                />
                            ) : (
                                <LoginButton login={loginWithRedirect} />
                            )}
                        </Box>
                    }
                />
            }
            tableListComponent={
                <TablesList
                    tableData={tableData}
                    editablePopup={true}
                    waiterData={waiterData}
                />
            }
            itemListComponent={<ItemsList />}
            isLoading={isLoading}
        />
    );
};

export default HomePage;
