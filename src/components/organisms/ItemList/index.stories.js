import React from "react";
import ItemList from "./index";
import baseTheme from "../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "../../../app/store";

export default {
    title: "Organisms/ItemList",
    component: ItemList,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Provider store={store}>
            <ItemList {...args} />
        </Provider>
    </ThemeProvider>
);

export const itemList = Template.bind({});

itemList.args = {
    list: require("../../../data/items.json"),
};
