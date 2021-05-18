import { fireEvent, render, screen } from "@testing-library/react";
import PopupData from ".";

describe("Popup Data", () => {
    it("render Popup Data", () => {
        const wrapper = render(
            <PopupData
                items={[
                    {
                        id: 0,
                        itemName: "Dosa",
                        itemPrice: 20,
                        servings: 2,
                    },
                ]}
                editable={true}
            />
        );
        expect(wrapper).toBeDefined;

        expect(screen.queryByText("Dosa")).toBeInTheDocument();
        expect(screen.queryByText("20")).toBeInTheDocument();
        expect(screen.getByLabelText("delete-button-0")).toBeInTheDocument();
    });
    it("on servings change", () => {
        const mockServingChange = jest.fn();

        const wrapper = render(
            <PopupData
                items={[
                    {
                        id: 0,
                        itemName: "Dosa",
                        itemPrice: 20,
                        servings: 2,
                    },
                ]}
                onServingsChange={mockServingChange}
                editable={true}
            />
        );
        expect(wrapper).toBeDefined;

        fireEvent.change(wrapper.getByDisplayValue("2"), {
            target: { value: "3" },
        });
        expect(mockServingChange).toBeCalled();
    });
    it("editable is false", () => {
        const mockServingChange = jest.fn();

        const wrapper = render(
            <PopupData
                items={[
                    {
                        id: 0,
                        itemName: "Dosa",
                        itemPrice: 20,
                        servings: 2,
                    },
                ]}
                onServingsChange={mockServingChange}
                editable={false}
            />
        );
        expect(
            wrapper.queryByTestId("serving-input-0")
        ).not.toBeInTheDocument();
        expect(
            wrapper.queryByTestId("delete-button-0")
        ).not.toBeInTheDocument();
    });
    it("on delete", () => {
        const mockOnDelete = jest.fn();

        const wrapper = render(
            <PopupData
                items={[
                    {
                        id: 0,
                        itemName: "Dosa",
                        itemPrice: 20,
                        servings: 2,
                    },
                ]}
                onDelete={mockOnDelete}
                editable={true}
            />
        );
        expect(wrapper).toBeDefined;

        fireEvent.click(wrapper.getByLabelText("delete-button-0"));
        expect(mockOnDelete).toBeCalledWith(0);
    });
    it("List is empty", () => {
        const wrapper = render(<PopupData items={[]} />);
        expect(wrapper).toBeDefined;

        expect(
            screen.queryByText(
                Drag and drop an item on a table to add that item to the table
            )
        ).toBeInTheDocument();
    });
});
