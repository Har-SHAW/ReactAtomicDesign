import React from "react";
import ItemName from "../../atoms/ItemAtoms/ItemName/index";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        width: "19vw",
        height: "calc(16vw + 3vw)",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "3vw",
        marginBottom: "0px",
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
            transform: "scale(1.05)",
        },
        "&:active": {
            transform: "scale(1)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "45vw",
            height: "40vw",
        },
    },
    iconContainer: {
        width: "100%",
        height: "15vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            height: "28vw",
        },
    },
    icon: {
        height: "calc(14vw + 10px)",
        width: "100%",
        objectFit: "cover",
        [theme.breakpoints.down("sm")]: {
            height: "28vw",
        },
    },
    container: {
        width: "100%",
        height: "5vw",
        [theme.breakpoints.down("sm")]: {
            height: "12vw",
        },
    },
}));
import PropTypes from "prop-types";

const Item = (props) => {
    const style = styles();

    return (
        <Card raised={true} className={style.root} {...props}>
            <Box className={style.iconContainer}>
                <img
                    src={props.data.image}
                    className={style.icon}
                    alt="No"
                    draggable={false}
                />
            </Box>
            <Box className={style.container}>
                <ItemName {...props.data} />
            </Box>
        </Card>
    );
};

Item.propsType = {
    data: PropTypes.shape({
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;
