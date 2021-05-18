import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import ProfileComponent from ".";
import baseTheme from "../../../themes/index";
import store from "../../../app/store";

export default {
    title: "Organisms/Profile Organism",
    component: ProfileComponent,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Provider store={store}>
            <ProfileComponent {...args} />
        </Provider>
    </ThemeProvider>
);

export const profile = Template.bind({});
profile.args = {
    waiterData: {
        name: "Shaw",
        email: "shaw@gmail.com",
        picture: "",
        age: "20",
        phoneNo: "9090909090",
        gender: "Male",
    },
};
