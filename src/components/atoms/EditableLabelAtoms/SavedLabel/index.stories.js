import SavedLabel from ".";
import { ThemeProvider } from "@material-ui/styles";
import baseTheme from "../../../../themes/index";

export default {
    title: "Atoms/Label",
    component: SavedLabel,
    argTypes: {
        onEditClick: { action: "edit clicked" },
    },
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <SavedLabel {...args} />
    </ThemeProvider>
);

export const savedLabel = Template.bind({});
savedLabel.args = {
    label: "Shaw",
    labelHead: "Customer Name",
};
