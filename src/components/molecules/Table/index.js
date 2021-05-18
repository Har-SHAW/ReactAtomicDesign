import React from "react";
import TableName from "../../atoms/TableAtoms/TableName/index";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = makeStyles((theme) => ({
    reservedRoot: {
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
        borderRadius: "20px",
        width: "25vw",
        height: "8vw",
        margin: "3vw auto",
        cursor: "pointer",
        transition: "0.2s",
        "& $iconContainer": {
            width: "35%",
        },
        [theme.breakpoints.down("sm")]: {
            transform: "rotate(90deg) translateY(25vw) translateX(25vw)",
            transformOrigin: "right top",
            margin: "30vw 2.5vw",
            width: "50vw",
            height: "25vw",
        },
    },
    notReservedRoot: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        borderRadius: "20px",
        width: "25vw",
        height: "8vw",
        margin: "3vw auto",
        cursor: "pointer",
        "&:hover": {
            "& $iconContainer": {
                width: "35%",
            },
        },
        [theme.breakpoints.down("sm")]: {
            transform: "rotate(90deg) translateY(25vw) translateX(25vw)",
            transformOrigin: "right top",
            margin: "30vw 2.5vw",
            width: "50vw",
            height: "25vw",
        },
    },
    iconContainer: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.3s",
        boxShadow: "10px 0px 10px -1px grey",
    },
    icon: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
    container: {
        width: "65%",
        height: "100%",
        overflow: "hidden",
    },
}));

const Table = (props) => {
    const style = styles();

    return (
        <Card
            raised={true}
            className={
                props.data.tableName
                    ? style.reservedRoot
                    : style.notReservedRoot
            }
            {...props}
        >
            <Box className={style.iconContainer}>
                <img
                    src="https://img.freepik.com/free-vector/top-view-lamb-beef-steak_1308-15475.jpg?size=626&ext=jpg"
                    alt="No"
                    className={style.icon}
                />
            </Box>
            <Box className={style.container}>
                <TableName {...props.data} />
            </Box>
        </Card>
    );
};

Table.propsType = {
    data: PropTypes.object.isRequired,
};

export default Table;
