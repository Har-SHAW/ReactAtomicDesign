import React from "react";
import PropTypes from "prop-types";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    user: {
        fontSize: "20px",
        fontWeight: "bolder",
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
        <Button className={style.login} onClick={() => props.login()}>
            <Typography style={{ color: "white" }}>Login</Typography>
        </Button>
    );
}

export default LoginButton;
