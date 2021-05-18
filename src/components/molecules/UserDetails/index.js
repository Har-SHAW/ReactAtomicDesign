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
        cursor: "pointer",
    },
    username: {
        marginRight: "1vw",
    },
    email: {
        fontSize: "15px",
        fontWeight: "normal",
        marginRight: "1vw",
        color: "lightgrey",
    },
    image: {
        height: "50px",
        width: "50px",
        marginRight: "10px",
        borderRadius: "25px",
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
            <Box
                onClick={props.profileClick}
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <img className={style.image} src={props.user.picture} />
                <Box>
                    <Typography variant="h2" className={style.username}>
                        {props.user.name}
                    </Typography>
                    <Typography className={style.email}>
                        {props.user.email}
                    </Typography>
                </Box>
            </Box>
            <Button className={style.login} onClick={() => props.logout()}>
                <Typography style={{ color: "white" }}>Logout</Typography>
            </Button>
        </Box>
    );
}

export default UserDetails;
