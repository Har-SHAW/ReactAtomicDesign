import { createSlice } from "@reduxjs/toolkit";

const initialState = require("../../data/items.json");

export const itemsListSlice = createSlice({
    name: "itemsListSlice",
    initialState: initialState,
    reducers: {},
});

export default itemsListSlice.reducer;
