import { render, screen } from "@testing-library/react";
import TableName from ".";

describe("Table Name", () => {
    it("render Table Name", () => {
        const wrapper = render(
            <TableName tableName={"Shaw"} totalItems={2} totalPrice={100} />
        );
        expect(wrapper).toBeDefined;
        expect(wrapper.queryByText("Shaw")).toBeInTheDocument();
        expect(wrapper.queryByText("2")).toBeInTheDocument();
        expect(wrapper.queryByText("100 /-")).toBeInTheDocument();
    });
});
