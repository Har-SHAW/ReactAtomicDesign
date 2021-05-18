import React, { useEffect } from "react";
import ProfileTemplate from "../../templates/ProfileTemplate";
import NavigationBar from "../../molecules/NavigationBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import TablesList from "../../organisms/TablesList";
import ProfileComponent from "../../organisms/Profile";
import { useHistory } from "react-router";

ProfilePage.propTypes = {};

function ProfilePage(props) {
    const { loginWithRedirect, logout } = useAuth0();

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
                    login={loginWithRedirect}
                    user={waiterData}
                    logout={() =>
                        logout({
                            returnTo: window.location.origin,
                        })
                    }
                    profileClick={() => {
                        history.replace("/profile");
                    }}
                    logoClick={() => history.push("/")}
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
