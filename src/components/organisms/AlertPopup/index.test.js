import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import AlertComponent from ".";
import store from "../../../app/store";
import { closeAlert, openAlert } from "../../../features/AlertPopup";
import * as react from "react-redux";

describe("Alert component test", () => {
    it("render test", () => {
        const wrapper = render(
            <Provider store={store}>
                <AlertComponent />
            </Provider>
        );

        store.dispatch(openAlert("Hai all"));

        expect(wrapper).toBeDefined();
        expect(wrapper.queryByText("Hai all")).toBeInTheDocument();
        expect(wrapper.queryByText("Ok")).toBeInTheDocument();

        store.dispatch(closeAlert());
        expect(wrapper.queryByText("Hai all")).not.toBeInTheDocument();
    });
    it("dispatch test", () => {
        const dispatchSpy = jest.spyOn(react, "useDispatch");
        const mockFn = jest.fn();
        dispatchSpy.mockReturnValue(mockFn);
        const wrapper = render(
            <Provider store={store}>
                <AlertComponent />
            </Provider>
        );

        store.dispatch(openAlert("Hai all"));

        fireEvent.click(wrapper.queryByText("Ok"));
        expect(mockFn).toBeCalledWith(closeAlert());
    });
});
