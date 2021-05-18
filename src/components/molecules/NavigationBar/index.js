import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    nav: {
        height: "100%",
        width: "100%",
        background: "rgb(51, 63, 62)",
        color: "white",
        display: "flex",
        alignItems: "center",
    },
    title: {
        width: "30vw",
        textAlign: "center",
        cursor: "pointer",
    },
    right: {
        width: "70vw",
        textAlign: "end",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
}));

const NavigationBar = (props) => {
    const style = useStyle();
    return (
        <Box className={style.nav}>
            <Box className={style.title}>
                <Typography variant="h1" onClick={props.logoClick}>
                    ZeMoSo Restaurant
                </Typography>
            </Box>
            <Box className={style.right}>{props.rightComponent}</Box>
        </Box>
    );
};

export default NavigationBar;
