import React from "react";
import Table from "./index";
import baseTheme from "../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";

export default {
    title: "Molecules/TableCard",
    component: Table,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Table {...args} />
    </ThemeProvider>
);

export const tableCardReserved = Template.bind({});
tableCardReserved.args = {
    data: {
        id: 0,
        tableName: "Harsha",
        totalItems: 1,
        totalPrice: 30,
    },
};

export const tableCardNotReserved = Template.bind({});
tableCardNotReserved.args = {
    data: {
        id: 0,
        tableName: "",
        totalItems: 0,
        totalPrice: 0,
    },
};
