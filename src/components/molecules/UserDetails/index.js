import React from "react";
import PropTypes from "prop-types";
import {
    Box,
    Button,
    makeStyles,
    Typography,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Menu,
} from "@material-ui/core";

import { Person, ExitToApp, Feedback } from "@material-ui/icons";

const useStyle = makeStyles(() => ({
    user: {
        fontSize: "20px",
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
    },
    username: {
        height: "50px",
        maxWidth: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        paddingRight: "25px",
        paddingLeft: "25px",
        borderRadius: "25px",
        whiteSpace: "nowrap",
        transition: "0.5s",
        color: "rgb(51, 63, 62)",
    },
    content: {
        position: "relative",
        height: "50px",
        width: "auto",
        borderRadius: "25px",
        background: "white",
        "&:hover": {
            "& $username": {
                maxWidth: "250px",
                paddingRight: "60px",
            },
        },
    },
    image: {
        height: "50px",
        width: "50px",
        borderRadius: "25px",
        position: "absolute",
        bottom: "0px",
        right: "0px",
    },
    login: {
        border: "1px solid white",
    },
}));

UserDetails.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    profileClick: PropTypes.func.isRequired,
};

function UserDetails(props) {
    const style = useStyle();

    return (
        <Box className={style.user}>
            <Box className={style.content}>
                <img
                    className={style.image}
                    src={props.user.picture}
                    onClick={props.handleClick}
                />
                <Box className={style.username}>
                    <Person style={{ marginRight: "10px" }} />
                    {props.user.name}
                </Box>
            </Box>
            <Menu
                anchorEl={props.anchorEl}
                keepMounted
                open={Boolean(props.anchorEl)}
                onClose={props.handleClose}
                elevation={10}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <MenuItem onClick={props.profileClick}>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </MenuItem>
                <MenuItem onClick={props.logout}>
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Feedback />
                    </ListItemIcon>
                    <ListItemText primary="Feedback" />
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default UserDetails;
