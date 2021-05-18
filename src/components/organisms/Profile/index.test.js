import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import ProfileComponent from ".";
import store from "../../../app/store";
import waiterSlice, { saveUser } from "../../../features/waiterServingsList";

describe("Profile Test", () => {
    it("render", () => {
        const wrap = render(
            <Provider store={store}>
                <ProfileComponent
                    waiterData={{
                        name: "shaw",
                        email: "shaw@gmail.com",
                        picture: "",
                        age: "21",
                        phoneNo: "9090909090",
                        gender: "male",
                    }}
                />
            </Provider>
        );
        expect(wrap).toBeDefined();

        expect(wrap.queryByText("Hello! shaw")).toBeInTheDocument();
        expect(wrap.queryByText("shaw@gmail.com")).toBeInTheDocument();
        expect(wrap.queryByText("Age: 21")).toBeInTheDocument();
        expect(wrap.queryByText("Gender: male")).toBeInTheDocument();
        expect(wrap.queryByText("Phone No: 9090909090")).toBeInTheDocument();
    });

    it("loading", () => {
        const wrap = render(
            <Provider store={store}>
                <ProfileComponent waiterData={null} />
            </Provider>
        );
        expect(wrap).toBeDefined();

        expect(wrap.queryByText("Loading...")).toBeInTheDocument();
    });

    it("input fields", () => {
        const wrap = render(
            <Provider store={store}>
                <ProfileComponent
                    waiterData={{
                        name: "shaw",
                        email: "shaw@gmail.com",
                        picture: "",
                        age: "21",
                        phoneNo: "9090909090",
                        gender: "male",
                    }}
                />
            </Provider>
        );

        fireEvent.click(wrap.queryAllByLabelText("EditIcon")[0]);
        fireEvent.change(wrap.getByTestId("Edit Name"), {
            target: { value: "9090909090" },
        });
        fireEvent.click(wrap.queryByText("Save"));

        fireEvent.click(wrap.queryAllByLabelText("EditIcon")[1]);
        fireEvent.change(wrap.getByTestId("Edit Name"), {
            target: { value: "21" },
        });
        fireEvent.click(wrap.queryByText("Save"));

        fireEvent.click(wrap.queryAllByLabelText("EditIcon")[2]);
        fireEvent.change(wrap.getByTestId("Edit Name"), {
            target: { value: "male" },
        });
        fireEvent.click(wrap.queryByText("Save"));

        expect(wrap.queryByText("Age: 21")).toBeInTheDocument();
        expect(wrap.queryByText("Gender: male")).toBeInTheDocument();
        expect(wrap.queryByText("Phone No: 9090909090")).toBeInTheDocument();
    });
});
