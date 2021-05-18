import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ProfileTemplate from "./index";
import baseTheme from "../../../themes/index";
import { Box } from "@material-ui/core";

export default {
    title: "Templates/ProfileTemplate",
    component: ProfileTemplate,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <ProfileTemplate {...args} />
    </ThemeProvider>
);

export const profileTemplate = Template.bind({});
const style = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
};
profileTemplate.args = {
    navigationBarComponent: (
        <Box
            style={{
                ...style,
                background: "black",
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
    profileComponent: (
        <Box
            style={{
                ...style,
                background: "green",
            }}
        >
            Profile
        </Box>
    ),
};
