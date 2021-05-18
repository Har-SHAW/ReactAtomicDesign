import React from "react";
import PropTypes from "prop-types";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    user: {
        width: "65vw",
        textAlign: "end",
        fontSize: "20px",
        fontWeight: "bolder",
        marginRight: "5vw",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    login: {
        border: "1px solid white",
    },
}));

LoginButton.propTypes = {
    login: PropTypes.func.isRequired,
};

function LoginButton(props) {
    const style = useStyle();
    return (
        <Box className={style.user}>
            <Button className={style.login} onClick={() => props.login()}>
                <Typography style={{ color: "white" }}>Login</Typography>
            </Button>
        </Box>
    );
}

export default LoginButton;
