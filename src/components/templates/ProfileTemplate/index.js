import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
    },
    nav: {
        height: "10vh",
    },
    tableList: {
        width: "30vw",
    },
    profile: {
        width: "70vw",
    },
    body: {
        display: "flex",
        height: "90vh",
    },
}));

ProfileTemplate.propTypes = {
    navigationBarComponent: PropTypes.element.isRequired,
    profileComponent: PropTypes.element.isRequired,
    tableListComponent: PropTypes.element.isRequired,
};

function ProfileTemplate(props) {
    const style = useStyles();
    return (
        <Box className={style.root}>
            <Box className={style.nav}>{props.navigationBarComponent}</Box>
            <Box className={style.body}>
                <Box className={style.profile}>{props.profileComponent}</Box>
                <Box className={style.tableList}>
                    {props.tableListComponent}
                </Box>
            </Box>
        </Box>
    );
}

export default ProfileTemplate;
