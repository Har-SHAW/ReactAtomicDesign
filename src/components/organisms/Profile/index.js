import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import EditableLabel from "../EditableLabel";
import {
    saveAge,
    savePhoneNo,
    saveGender,
} from "../../../features/waiterServingsList";
import { useDispatch } from "react-redux";

ProfileComponent.propTypes = {};

const useStyle = makeStyles({
    root: {
        width: "100%",
        height: "100%",
    },
    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    navBottom: {
        height: "60px",
        background: "rgb(51, 63, 62)",
        width: "100%",
    },
    profilePicture: {
        height: "10vw",
        width: "10vw",
        borderRadius: "5vw",
        margin: "10px",
    },
});

function ProfileComponent(props) {
    const style = useStyle();

    const dispatch = useDispatch();

    return (
        <Box className={style.root}>
            <Box className={style.navBottom} />

            <Box className={style.content}>
                {props.waiterData ? (
                    <Box className={style.content}>
                        <img
                            src={props.waiterData.picture}
                            className={style.profilePicture}
                        />
                        <Typography variant="subtitle1">
                            Hello! {props.waiterData.name}
                        </Typography>
                        <Typography variant="subtitle2">
                            {props.waiterData.email}
                        </Typography>
                        <Box style={{ height: "50px" }} />

                        <Box style={{ width: "20vw" }}>
                            <EditableLabel
                                label={props.waiterData.phoneNo}
                                onSave={(changedText) => {
                                    dispatch(savePhoneNo(changedText));
                                }}
                                labelHead="Phone No"
                            />
                        </Box>
                        <Box style={{ width: "20vw" }}>
                            <EditableLabel
                                label={props.waiterData.age}
                                onSave={(changedText) => {
                                    dispatch(saveAge(changedText));
                                }}
                                labelHead="Age"
                            />
                        </Box>
                        <Box style={{ width: "20vw" }}>
                            <EditableLabel
                                label={props.waiterData.gender}
                                onSave={(changedText) => {
                                    dispatch(saveGender(changedText));
                                }}
                                labelHead="Gender"
                            />
                        </Box>
                    </Box>
                ) : (
                    <Box>
                        <Typography variant="subtitle1">Loading...</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default ProfileComponent;
