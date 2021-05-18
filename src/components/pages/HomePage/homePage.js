import React, { useEffect } from "react";
import NavigationBar from "../../molecules/NavigationBar/index";
import ItemsList from "../../organisms/ItemList";
import TablesList from "../../organisms/TablesList";
import HomeTemplate from "../../templates/HomeTemplate";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../../../features/waiterServingsList";
import { useHistory } from "react-router";

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
                    name: user.name,
                    picture: user.picture,
                    email: user.email,
                })
            );
        }
    });

    return (
        <HomeTemplate
            navigationBarComponent={
                <NavigationBar
                    login={loginWithRedirect}
                    user={waiterData}
                    logout={() =>
                        logout({
                            returnTo: window.location.origin,
                        })
                    }
                    profileClick={() => history.push("/profile")}
                    logoClick={() => history.replace("/")}
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
