import { Box } from "@material-ui/core";
import { render } from "@testing-library/react";
import ProfileTemplate from ".";

describe("Home template test", () => {
    it("render", () => {
        const wrapper = render(
            <ProfileTemplate
                navigationBarComponent={<Box>Navigation bar</Box>}
                tableListComponent={<Box>Table List</Box>}
                profileComponent={<Box>Profile Component</Box>}
            />
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.queryByText("Navigation bar")).toBeInTheDocument();
        expect(wrapper.queryByText("Table List")).toBeInTheDocument();
        expect(wrapper.queryByText("Profile Component")).toBeInTheDocument();
    });
});
