import React from "react";
import PropTypes from "prop-types";
import EditLabel from "../../atoms/EditableLabelAtoms/EditLabel";
import SavedLabel from "../../atoms/EditableLabelAtoms/SavedLabel";

EditableLabelMolecule.propTypes = {
    onLabelChange: PropTypes.func.isRequired,
    saveLabel: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    onEditClick: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired,
    labelHead: PropTypes.string.isRequired,
};

function EditableLabelMolecule(props) {
    return props.edit ? <EditLabel {...props} /> : <SavedLabel {...props} />;
}

export default EditableLabelMolecule;
