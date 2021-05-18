import { fireEvent, render } from "@testing-library/react";
import EditLabel from ".";

describe("Edit label test", () => {
    it("render", () => {
        const onLabelChange = jest.fn();
        const saveLabel = jest.fn();
        const wrap = render(
            <EditLabel
                onLabelChange={onLabelChange}
                saveLabel={saveLabel}
                label={"Shaw"}
                labelHead={"Name:"}
            />
        );

        expect(wrap).toBeDefined();
        fireEvent.change(wrap.queryByTestId("Edit Name"), {
            target: { value: "Har" },
        });
        expect(onLabelChange).toBeCalled();

        fireEvent.click(wrap.queryByText("Save"));
        expect(saveLabel).toBeCalled();
    });
});
