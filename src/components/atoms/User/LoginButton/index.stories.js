import { Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import LoginButton from ".";
import baseTheme from "../../../../themes/index";

export default {
    title: "Atoms/LoginButton",
    component: LoginButton,
    argTypes: {
        login: { action: "Login" },
    },
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Box style={{ padding: "10px", background: "black" }}>
            <LoginButton {...args} />
        </Box>
    </ThemeProvider>
);

export const loginButton = Template.bind({});
