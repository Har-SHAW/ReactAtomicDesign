import { render, screen } from "@testing-library/react";
import Table from ".";

describe("Table", () => {
    it("render Table", () => {
        const wrapper = render(
            <Table
                data={{ tableName: "Shaw", totalItems: 2, totalPrice: 100 }}
            />
        );
        expect(wrapper).toBeDefined;
        expect(screen.queryByText("Shaw")).toBeInTheDocument();
        expect(screen.queryByText("2")).toBeInTheDocument();
        expect(screen.queryByText("100 /-")).toBeInTheDocument();
    });
});
