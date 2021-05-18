import { render, screen } from "@testing-library/react";

import ItemName from ".";

describe("Item Name", () => {
    it("render Item Name", () => {
        const wrapper = render(<ItemName itemName={"Dosa"} itemPrice={20} />);
        expect(wrapper).toBeDefined;
        expect(screen.queryByText("Dosa")).toBeInTheDocument();
        expect(screen.queryByText("20 /-")).toBeInTheDocument();
    });
});
