import { Box } from "@material-ui/core";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import HomeTemplate from ".";
import store from "../../../app/store";

describe("Home template test", () => {
    it("render", () => {
        const wrapper = render(
            <Provider store={store}>
                <HomeTemplate
                    navigationBarComponent={<Box>Navigation bar</Box>}
                    tableListComponent={<Box>Table List</Box>}
                    itemListComponent={<Box>Item List</Box>}
                />
            </Provider>
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.queryByText("Navigation bar")).toBeInTheDocument();
        expect(wrapper.queryByText("Table List")).toBeInTheDocument();
        expect(wrapper.queryByText("Item List")).toBeInTheDocument();
    });
});
