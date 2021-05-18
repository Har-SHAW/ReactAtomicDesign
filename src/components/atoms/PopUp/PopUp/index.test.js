import { fireEvent, render } from "@testing-library/react";
import PopUp from ".";

describe("Popup ", () => {
    it("render popup when open true", () => {
        const wrapper = render(<PopUp open={true} id={0} totalPrice={20} />);
        expect(wrapper).toBeDefined;

        expect(wrapper.queryByText("Table No - 1")).toBeInTheDocument();
        expect(wrapper.queryByText("Total Amount: 20")).toBeInTheDocument();
    });
    it("render popup when open false", () => {
        const wrapper = render(<PopUp open={false} tableName={0} />);
        expect(wrapper).toBeDefined;

        expect(wrapper.queryByText("Table No - 1")).toBeNull();
    });
    it("Test close action", () => {
        const mockFun = jest.fn();
        const wrapper = render(
            <PopUp open={true} tableName={0} totalPrice={20} close={mockFun} />
        );
        expect(wrapper).toBeDefined;

        fireEvent.click(wrapper.queryByText("Close"));
        expect(mockFun).toBeCalled();
    });
});
