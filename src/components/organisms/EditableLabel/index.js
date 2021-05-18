import React, { useState } from "react";
import PropTypes from "prop-types";
import EditableLabelMolecule from "../../molecules/EditableLabelMolecule";

EditableLabel.propTypes = {
    label: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    labelHead: PropTypes.string.isRequired,
};

function EditableLabel(props) {
    const [label, setLabel] = useState(props.label);

    const [isEdit, setIsEdit] = useState(props.label === "" ? true : false);

    const onLabelChange = (event) => {
        setLabel(event.target.value);
    };

    const onSave = () => {
        props.onSave(label);
        if (label) {
            setIsEdit(false);
        }
    };
    return (
        <EditableLabelMolecule
            onLabelChange={onLabelChange}
            saveLabel={onSave}
            onEditClick={() => setIsEdit(true)}
            edit={isEdit}
            {...props}
        />
    );
}

export default EditableLabel;
