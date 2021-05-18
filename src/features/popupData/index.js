import { createSlice } from "@reduxjs/toolkit";

const initialData = {
    tableIndex: 0,
    isOpen: false,
};

export const popupDataSlice = createSlice({
    name: "popupDataSlice",
    initialState: initialData,
    reducers: {
        changeData: (state, action) => {
            state.tableIndex = action.payload.tableIndex;
            state.isOpen = true;
        },
        openPopup: (state) => {
            state.isOpen = true;
        },
        closePopup: (state) => {
            state.isOpen = false;
        },
    },
});

export const { changeData, openPopup, closePopup } = popupDataSlice.actions;

export default popupDataSlice.reducer;
