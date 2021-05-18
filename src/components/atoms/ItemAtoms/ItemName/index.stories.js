import React from "react";
import ItemName from "./index";
import baseTheme from "../../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: "Atoms/DisplayData",
    //component: ItemName,
    decorators: [withKnobs],
};

const Template = () => (
    <ThemeProvider theme={baseTheme}>
        <ItemName
            itemName={text("Name", "Biryani")}
            itemPrice={text("Price", "300")}
        />
    </ThemeProvider>
);

export const itemName = Template.bind({});
itemName.args = {
    itemName: "Dosa",
    itemPrice: 20.0,
};
