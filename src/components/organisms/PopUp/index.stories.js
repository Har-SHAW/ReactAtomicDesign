import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import PopupOrganism from ".";
import baseTheme from "../../../themes/index";

export default {
    title: "Organisms/Popup with Data",
    component: PopupOrganism,
    argTypes: {
        onServingsChange: { action: "servings change" },
        onDelete: { action: "Delete item" },
        onSave: { action: "On customer name save" },
    },
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <PopupOrganism {...args} />
    </ThemeProvider>
);

export const popup = Template.bind({});
popup.args = {
    popup: {
        id: 0,
        tableName: "Harsha",
        totalPrice: 20,
        open: true,
    },
    popupData: {
        items: [
            {
                itemName: "Item1",
                itemPrice: 20,
                servings: 1,
            },
            {
                itemName: "Item2",
                itemPrice: 30,
                servings: 1,
            },
        ],
        editable: true,
    },
    customerName: "Harsha",
};

export const popupNoEdit = Template.bind({});
popupNoEdit.args = {
    popup: {
        id: 0,
        tableName: "Harsha",
        totalPrice: 20,
        open: true,
    },
    popupData: {
        items: [
            {
                itemName: "Item1",
                itemPrice: 20,
                servings: 1,
            },
            {
                itemName: "Item2",
                itemPrice: 30,
                servings: 1,
            },
        ],
        editable: false,
    },
    customerName: "Harsha",
};

export const popupNoData = Template.bind({});
popupNoData.args = {
    popup: {
        id: 0,
        tableName: "Harsha",
        totalPrice: 20,
        open: true,
    },
    popupData: {
        items: [],
        editable: true,
    },
    customerName: "Harsha",
};

export const popupNoCustomerName = Template.bind({});
popupNoCustomerName.args = {
    popup: {
        id: 0,
        totalPrice: 20,
        open: true,
    },
    popupData: {
        items: [],
        editable: true,
    },
    customerName: "",
};
