import { Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import UserDetails from ".";

export default {
    title: "Molecules/UserDetails",
    component: UserDetails,
    argTypes: { logout: { action: "Logout" } },
};

const Template = (args) => (
    <ThemeProvider>
        <Box style={{ padding: "10px", background: "black" }}>
            <UserDetails {...args} />
        </Box>
    </ThemeProvider>
);

export const userDetails = Template.bind({});
userDetails.args = {
    user: {
        name: "Shaw",
        email: "shaw@gmail.com",
    },
    isAuthenticated: true,
};
