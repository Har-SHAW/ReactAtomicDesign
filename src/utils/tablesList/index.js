import { changeData, closePopup } from "../../features/popupData/index";
import store from "../../app/store";
import { addServingsToWaiterList } from "../../features/waiterServingsList";

import {
    addItemToTable,
    changeServings,
    deleteItem,
    editCustomerName,
    clearTable,
} from "../../features/tableList/index";
import { openAlert } from "../../features/AlertPopup";

const popupData = () => store.getState().popupData;

const waiterData = () => store.getState().waiterServingsList;

const tableData = () => store.getState().tableList;

const itemsData = () => store.getState().itemsList;

const noOfServings = () => store.getState().waiterServingsList.noOfServings;

export const onTableClick = (index) => {
    console.log("clicked");
    if (!waiterData().name) {
        store.dispatch(openAlert("You need to login first"));
        return;
    }
    store.dispatch(
        changeData({
            tableIndex: index,
        })
    );
};

export const onDelete = (itemIndex) => {
    store.dispatch(
        deleteItem({
            itemIndex: itemIndex,
            tableIndex: popupData().tableIndex,
        })
    );
};

export const onServingsChange = (event, itemIndex) => {
    store.dispatch(
        changeServings({
            servings: event.target.value,
            itemIndex: itemIndex,
            tableIndex: popupData().tableIndex,
        })
    );
};

export const drop = (event, index) => {
    event.preventDefault();
    if (!waiterData().name) {
        store.dispatch(openAlert("You need to login first"));
        return;
    }
    if (!tableData()[index].tableName) {
        store.dispatch(
            openAlert(
                "Click on the table, reserve the table by saving Customer's name"
            )
        );
        return;
    }
    store.dispatch(
        addItemToTable({
            index: index,
            itemData: itemsData().filter(
                (ele) =>
                    ele.id === parseInt(event.dataTransfer.getData("itemId"))
            )[0],
        })
    );
};

export const onClosePopUp = () => {
    store.dispatch(closePopup());
};

export const closeServings = () => {
    store.dispatch(
        addServingsToWaiterList({
            ...tableData()[popupData().tableIndex],
            id: noOfServings(),
            tableId: popupData().tableIndex,
        })
    );
    store.dispatch(clearTable(popupData().tableIndex));
    onClosePopUp();
};

export const onCustomerNameSave = (customerName) => {
    store.dispatch(
        editCustomerName({
            tableId: popupData().tableIndex,
            customerName: customerName,
        })
    );
    if (!tableData()[popupData().tableIndex].items.length) {
        onClosePopUp();
    }
};
