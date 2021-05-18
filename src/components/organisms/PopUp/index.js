import React from "react";
import PopUp from "../../atoms/PopUp/PopUp";
import PopupData from "../../molecules/PopUpData";
import PropTypes from "prop-types";

import EditableLabel from "../EditableLabel";
import { Typography } from "@material-ui/core";

const PopUpOrganism = (props) => {
    return (
        <PopUp {...props.popup}>
            {props.popupData.editable ? (
                <EditableLabel
                    label={props.customerName}
                    onSave={props.onSave}
                    labelHead={"Customer Name"}
                />
            ) : (
                <Typography>Customer Name: {props.customerName}</Typography>
            )}
            <PopupData {...props.popupData} />
        </PopUp>
    );
};

PopUpOrganism.propsType = {
    popup: PropTypes.object.isRequired,
    popupData: PropTypes.object.isRequired,
    customerName: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default PopUpOrganism;
