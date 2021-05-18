import React from "react";
import {
    Box,
    CircularProgress,
    Dialog,
    makeStyles,
    Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import AlertComponent from "../../organisms/AlertPopup";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    nav: {
        height: "10vh",
        [theme.breakpoints.down("sm")]: {
            height: "20vh",
        },
    },
    title: {
        width: "30vw",
        textAlign: "center",
    },
    body: {
        display: "flex",
        height: "90vh",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            height: "80vh",
        },
    },
    tableList: {
        width: "30vw",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
        },
    },
    itemList: {
        width: "70vw",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
        },
    },
    loading: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "120px",
        width: "300px",
    },
}));

const HomeTemplate = (props) => {
    const style = styles();

    return (
        <Box className={style.root}>
            {props.isLoading && (
                <Dialog open={true}>
                    <Box className={style.loading}>
                        <Typography variant="caption"> Please Wait</Typography>
                        <CircularProgress
                            style={{ height: "50px", width: "50px" }}
                        />
                    </Box>
                </Dialog>
            )}
            <AlertComponent />
            <Box className={style.nav}>{props.navigationBarComponent}</Box>
            <Box className={style.body}>
                <Box className={style.tableList}>
                    {props.tableListComponent}
                </Box>
                <Box className={style.itemList}>{props.itemListComponent}</Box>
            </Box>
        </Box>
    );
};

HomeTemplate.propsType = {
    navigationBarComponent: PropTypes.element.isRequired,
    itemListComponent: PropTypes.element.isRequired,
    tableListComponent: PropTypes.element.isRequired,
};

export default HomeTemplate;
