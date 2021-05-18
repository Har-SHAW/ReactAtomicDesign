import React from "react";
import PropTypes from "prop-types";
import { Box, Button, makeStyles, OutlinedInput } from "@material-ui/core";

EditLabel.propTypes = {
    onLabelChange: PropTypes.func.isRequired,
    saveLabel: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    labelHead: PropTypes.string.isRequired,
};

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "45px",
        marginBottom: "20px",
    },
}));

function EditLabel(props) {
    const style = useStyles();

    return (
        <Box className={style.root}>
            <OutlinedInput
                fullWidth
                onChange={props.onLabelChange}
                defaultValue={props.label}
                placeholder={props.labelHead}
                inputProps={{ "data-testid": "Edit Name" }}
            />
            <Button onClick={props.saveLabel}>Save</Button>
        </Box>
    );
}

export default EditLabel;
