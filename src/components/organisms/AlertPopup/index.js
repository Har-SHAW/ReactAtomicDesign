import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../../../features/AlertPopup";

function AlertComponent(props) {
    const alertData = useSelector((state) => state.alertData);

    const dispatch = useDispatch();

    return (
        <Dialog open={alertData.open}>
            <DialogContent>
                <Typography variant="caption">{alertData.content}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(closeAlert())} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AlertComponent;
