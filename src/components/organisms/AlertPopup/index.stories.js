import AlertComponent from ".";
import baseTheme from "../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { Button } from "@material-ui/core";
import { openAlert } from "../../../features/AlertPopup";

export default {
    title: "Organisms/AlertPopup",
    component: AlertComponent,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Provider store={store}>
            <Button
                color="primary"
                onClick={() => {
                    store.dispatch(
                        openAlert("This is Sample content in the alert")
                    );
                }}
            >
                Click here to fire alert
            </Button>
            <AlertComponent {...args} />
        </Provider>
    </ThemeProvider>
);

export const alertPopup = Template.bind({});
alertPopup.args = {};
