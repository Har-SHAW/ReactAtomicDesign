import { render } from "@testing-library/react";
import PopUpOrganism from ".";

describe("popup test", () => {
    it("editable on test", () => {
        const mockfn = jest.fn();
        const wrapper = render(
            <PopUpOrganism
                popupData={{ editable: true }}
                popup={{ open: true }}
                customerName={"shaw"}
                onSave={mockfn}
            />
        );
        expect(wrapper.queryByText("Customer Name: shaw")).toBeInTheDocument();
        expect(wrapper.queryByLabelText("EditIcon")).toBeInTheDocument();
    });
    it("editable off test", () => {
        const mockfn = jest.fn();
        const wrapper = render(
            <PopUpOrganism
                popupData={{ editable: false }}
                popup={{ open: true }}
                customerName={"shaw"}
                onSave={mockfn}
            />
        );
        expect(wrapper.queryByText("Customer Name: shaw")).toBeInTheDocument();
        expect(wrapper.queryByLabelText("EditIcon")).not.toBeInTheDocument();
    });
});
