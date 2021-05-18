import { render, screen } from "@testing-library/react";
import Item from ".";

describe("Item ", () => {
    it("render Item", () => {
        const wrapper = render(
            <Item data={{ itemName: "Dosa", itemPrice: 20 }} />
        );
        expect(wrapper).toBeDefined;
        expect(screen.queryByText("Dosa")).toBeInTheDocument();
        expect(screen.queryByText("20 /-")).toBeInTheDocument();
    });
});
