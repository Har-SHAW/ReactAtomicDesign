import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import HomeTemplate from "./index";
import baseTheme from "../../../themes/index";
import { Box } from "@material-ui/core";

export default {
    title: "Templates/HomeTemplate",
    component: HomeTemplate,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <HomeTemplate {...args} />
    </ThemeProvider>
);

export const homeTemplate = Template.bind({});
const style = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
};
homeTemplate.args = {
    navigationBarComponent: (
        <Box
            style={{
                ...style,
                background: "black",
                width: "100vw",
            }}
        >
            Navigation bar
        </Box>
    ),
    tableListComponent: (
        <Box
            style={{
                ...style,
                background: "grey",
            }}
        >
            Table List
        </Box>
    ),
    itemListComponent: (
        <Box
            style={{
                ...style,
                background: "green",
            }}
        >
            Item List
        </Box>
    ),
};
