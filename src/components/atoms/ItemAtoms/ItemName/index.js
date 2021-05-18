import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        alignItems: "start",
    },
    contentContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "start",
    },
}));

const ItemName = (props) => {
    const style = useStyles();
    return (
        <Box className={style.root}>
            <Box className={style.contentContainer}>
                <Typography variant="body2" style={{ marginLeft: "30px" }}>
                    Name:
                </Typography>
                <Typography variant="body2" style={{ marginLeft: "30px" }}>
                    Price:
                </Typography>
            </Box>
            <Box className={style.contentContainer}>
                <Typography variant="body1" style={{ marginLeft: "10px" }}>
                    {props.itemName}
                </Typography>
                <Typography variant="body1" style={{ marginLeft: "10px" }}>
                    {props.itemPrice} /-
                </Typography>
            </Box>
        </Box>
    );
};

ItemName.propsType = {
    itemName: PropTypes.string.isRequired,
    itemPrice: PropTypes.string.isRequired,
};

export default ItemName;
