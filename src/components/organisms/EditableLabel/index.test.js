import { fireEvent, render } from "@testing-library/react";
import EditableLabel from ".";

describe("Editable label tests", () => {
    it("render", () => {
        const mock = jest.fn();
        const wrapper = render(
            <EditableLabel labelHead={"Name"} label={"Shaw"} onSave={mock} />
        );
        expect(wrapper).toBeDefined();
    });

    it("Label render", () => {
        const mock = jest.fn();
        const wrapper = render(
            <EditableLabel labelHead={"Name"} label={"Shaw"} onSave={mock} />
        );
        expect(wrapper.queryByText("Name: Shaw")).toBeInTheDocument();
    });

    it("Call back test", () => {
        const mock = jest.fn();
        const wrapper = render(
            <EditableLabel labelHead={"Name"} label={"Shaw"} onSave={mock} />
        );
        fireEvent.click(wrapper.queryByLabelText("EditIcon"));
        fireEvent.change(wrapper.queryByPlaceholderText("Name"), {
            target: { value: "New" },
        });
        fireEvent.click(wrapper.queryByText("Save"));

        expect(mock).toBeCalledWith("New");
    });

    it("save without name", () => {
        const mock = jest.fn();
        const wrapper = render(
            <EditableLabel labelHead={"Name"} label={"Shaw"} onSave={mock} />
        );
        fireEvent.click(wrapper.queryByLabelText("EditIcon"));
        fireEvent.change(wrapper.queryByPlaceholderText("Name"), {
            target: { value: "" },
        });
        fireEvent.click(wrapper.queryByText("Save"));

        expect(mock).toBeCalledWith("");
        expect(wrapper.queryByPlaceholderText("Name")).toBeInTheDocument();
    });
});
