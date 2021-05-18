import React from "react";
import SearchBar from "./index";
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/index";

export default {
    title: "Atoms/SearchBar",
    component: SearchBar,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <SearchBar {...args} />
    </ThemeProvider>
);

export const searchBar = Template.bind({});
searchBar.args = {
    placeholder: "Search by Table Name",
};
