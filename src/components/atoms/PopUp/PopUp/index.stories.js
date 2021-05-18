import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import PopUp from ".";
import baseTheme from "../../../../themes/index";

export default {
    title: "Atoms/Popup atom",
    component: PopUp,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <PopUp {...args} />
    </ThemeProvider>
);

export const popup = Template.bind({});
popup.args = {
    id: 1,
    tableName: "Harsha",
    totalPrice: 20,
    open: true,
};
