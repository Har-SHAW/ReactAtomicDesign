import EditableLabel from ".";
import baseTheme from "../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";

export default {
    title: "Organisms/EditableLabel",
    component: EditableLabel,
    argTypes: {
        onSave: { action: "onSave" },
    },
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <EditableLabel {...args} />
    </ThemeProvider>
);

export const editableLabel = Template.bind({});
editableLabel.args = {
    label: "Harshaw",
    labelHead: "Customer Name ",
};
