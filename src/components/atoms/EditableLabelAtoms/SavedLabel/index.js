import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

SavedLabel.propTypes = {
    label: PropTypes.string.isRequired,
    onEditClick: PropTypes.func.isRequired,
    labelHead: PropTypes.string.isRequired,
};

const useStyle = makeStyles(() => ({
    root: {
        width: "1005",
        display: "flex",
        justifyContent: "space-between",
        height: "45px",
        marginBottom: "20px",
    },
}));

function SavedLabel(props) {
    const style = useStyle();

    return (
        <Box className={style.root}>
            <Typography>
                {props.labelHead}: {props.label}
            </Typography>
            <Edit
                style={{ cursor: "pointer" }}
                aria-label="EditIcon"
                onClick={props.onEditClick}
            />
        </Box>
    );
}

export default SavedLabel;
