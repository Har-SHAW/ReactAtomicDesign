import React from "react";
import TableList from "./index";
import baseTheme from "../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "../../../app/store";

export default {
    title: "Organisms/TableList",
    component: TableList,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Provider store={store}>
            <TableList {...args} />
        </Provider>
    </ThemeProvider>
);

export const tableList = Template.bind({});

tableList.args = {
    tableData: require("../../../data/tables.json"),
    editablePopup: true,
    waiterData: {
        name: "shaw",
    },
};
