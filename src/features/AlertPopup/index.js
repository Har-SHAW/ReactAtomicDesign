import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    content: "",
};

export const AlertDialogSlice = createSlice({
    name: "AlertDialogSlice",
    initialState: initialState,
    reducers: {
        openAlert: (state, action) => {
            state.open = true;
            state.content = action.payload;
        },
        closeAlert: (state, action) => {
            state.open = false;
            state.content = "";
        },
    },
});

export const { openAlert, closeAlert } = AlertDialogSlice.actions;

export default AlertDialogSlice.reducer;
