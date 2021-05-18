import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
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
import PropTypes from "prop-types";

const TableName = (props) => {
    const style = styles();
    return (
        <Box className={style.root}>
            <Box className={style.contentContainer}>
                <Typography variant="body2" style={{ margin: "0 0 0 2.5vw" }}>
                    Table:
                </Typography>
                <Typography variant="body2" style={{ margin: "0 0 0 2.5vw" }}>
                    Name:
                </Typography>
                <Typography variant="body2" style={{ margin: "0 0 0 2.5vw" }}>
                    Items:
                </Typography>
                <Typography variant="body2" style={{ margin: "0 0 0 2.5vw" }}>
                    Price:
                </Typography>
            </Box>
            <Box className={style.contentContainer}>
                <Typography variant="body1" style={{ margin: "0 0 0 1vw" }}>
                    Table No -{" "}
                    {props.isServings ? props.tableId + 1 : props.id + 1}
                </Typography>
                <Typography variant="body1" style={{ margin: "0 0 0 1vw" }}>
                    {props.tableName || "Not Reserved"}
                </Typography>
                <Typography variant="body1" style={{ margin: "0 0 0 1vw" }}>
                    {props.totalItems}
                </Typography>
                <Typography variant="body1" style={{ margin: "0 0 0 1vw" }}>
                    {props.totalPrice} /-
                </Typography>
            </Box>
        </Box>
    );
};

TableName.propsType = {
    tableName: PropTypes.string.isRequired,
    totalItems: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
};

export default TableName;
