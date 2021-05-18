import { configureStore } from "@reduxjs/toolkit";
import tableListSlice from "../features/tableList/index";
import popupDataSlice from "../features/popupData/index";
import itemsListData from "../features/itemList/index";
import waiterServingsData from "../features/waiterServingsList/index";
import alertDialogData from "../features/AlertPopup/index";

export default configureStore({
    reducer: {
        tableList: tableListSlice,
        popupData: popupDataSlice,
        itemsList: itemsListData,
        waiterServingsList: waiterServingsData,
        alertData: alertDialogData,
    },
});
