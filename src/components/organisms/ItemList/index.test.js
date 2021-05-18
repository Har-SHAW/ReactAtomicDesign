import { fireEvent, render, act, screen } from "@testing-library/react";
import ItemsList from ".";
import { Provider } from "react-redux";
import store from "../../../app/store";

const getWrapper = () => {
    const wrapper = render(
        <Provider store={store}>
            <ItemsList />
        </Provider>
    );
    expect(wrapper).toBeDefined;
    return wrapper;
};

export const helperForSearchBar = async (item, name) => {
    const comparingAllTableNames = (ele) => {
        if (ele.itemName === item) {
            expect(screen.queryByText(ele.itemName)).toBeInTheDocument();
        } else {
            expect(screen.queryByText(ele.itemName)).not.toBeInTheDocument();
        }
    };

    const executeAfterTheSearchBarByCourse = () => {
        require("../../../data/" + name + ".json").forEach(
            comparingAllTableNames
        );
    };

    const promiseForSearchBarByCourse = () =>
        new Promise((resolve) => {
            setTimeout(() => {
                executeAfterTheSearchBarByCourse();
                resolve();
            }, 500);
        });

    await act(() => promiseForSearchBarByCourse());
};

describe("Item List", () => {
    it("render Item List", () => {
        const wrapper = getWrapper();

        const mockFun = { setData: jest.fn() };

        fireEvent.dragStart(wrapper.queryByText("Dosa"), {
            dataTransfer: mockFun,
        });
        expect(mockFun.setData).toBeCalledWith("itemId", 1);
    });

    it("Search bar testing for Name", async () => {
        const wrapper = getWrapper();
        expect(wrapper).toBeDefined;
        const searchBar = wrapper.getByTestId("search-items");
        fireEvent.change(searchBar, { target: { value: "Dosa" } });

        await helperForSearchBar("Dosa", "items");
    });
    it("Search bar testing for Course", async () => {
        const wrapper = getWrapper();
        const searchBar = wrapper.getByTestId("search-items");
        fireEvent.change(searchBar, { target: { value: "beverages" } });

        await helperForSearchBar("Masala Chai", "items");
    });
    it("Search bar empty", async () => {
        const wrapper = getWrapper();
        const searchBar = wrapper.getByTestId("search-items");
        fireEvent.change(searchBar, { target: { value: "" } });

        expect(wrapper.queryByText("Dosa")).toBeInTheDocument();
        expect(wrapper.queryByText("Biryani")).toBeInTheDocument();
    });
});
