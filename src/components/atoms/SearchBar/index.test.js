import { fireEvent, render } from "@testing-library/react";
import SearchBar from ".";

describe("Search bar Bar", () => {
    it("render search bar", () => {
        const mockFun = jest.fn();

        const wrapper = render(
            <SearchBar onChange={mockFun} placeholder={"searchbar"} />
        );
        expect(wrapper).toBeDefined;

        fireEvent.change(wrapper.getByPlaceholderText("searchbar"), {
            target: { value: "some value" },
        });
        expect(mockFun).toBeCalled();
    });
});
