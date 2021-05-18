import { fireEvent, render } from "@testing-library/react";
import SavedLabel from ".";

describe("Save label test", () => {
    it("render", () => {
        const mock = jest.fn();
        const wrap = render(
            <SavedLabel labelHead={"Name"} label={"Shaw"} onEditClick={mock} />
        );
        expect(wrap).toBeDefined();
        expect(wrap.queryByText("Name: Shaw")).toBeInTheDocument();

        fireEvent.click(wrap.getByLabelText("EditIcon"));
        expect(mock).toBeCalled();
    });
});
