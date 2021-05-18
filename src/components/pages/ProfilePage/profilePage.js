import React, { useEffect } from "react";
import ProfileTemplate from "../../templates/ProfileTemplate";
import NavigationBar from "../../molecules/NavigationBar";
import { useSelector } from "react-redux";
import TablesList from "../../organisms/TablesList";
import ProfileComponent from "../../organisms/Profile";
import { useHistory } from "react-router";
import { Box, Typography } from "@material-ui/core";

ProfilePage.propTypes = {};

function ProfilePage(props) {
    const tableData = useSelector((state) => state.waiterServingsList.history);

    const waiterData = useSelector((state) => ({
        name: state.waiterServingsList.name,
        email: state.waiterServingsList.email,
        picture: state.waiterServingsList.picture,
        age: state.waiterServingsList.age,
        phoneNo: state.waiterServingsList.phoneNo,
        gender: state.waiterServingsList.gender,
    }));

    const history = useHistory();

    useEffect(() => {
        if (!waiterData.name) {
            history.replace("/");
        }
    });

    return (
        <ProfileTemplate
            navigationBarComponent={
                <NavigationBar
                    logoClick={() => history.push("/")}
                    rightComponent={
                        <Box
                            style={{
                                width: "30vw",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h2">
                                Your previous servings
                            </Typography>
                        </Box>
                    }
                />
            }
            tableListComponent={
                <TablesList
                    tableData={tableData}
                    editablePopup={false}
                    waiterData={waiterData}
                />
            }
            profileComponent={<ProfileComponent waiterData={waiterData} />}
        />
    );
}

export default ProfilePage;
