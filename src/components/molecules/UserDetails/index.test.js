import { fireEvent, render } from "@testing-library/react";
import UserDetails from ".";

describe("user details test", () => {
    it("render", () => {
        const logout = jest.fn();
        const profileClick = jest.fn();
        const wrapper = render(
            <UserDetails
                logout={logout}
                profileClick={profileClick}
                user={{ name: "shaw", email: "shaw@gmail.com" }}
            />
        );

        expect(wrapper).toBeDefined();

        expect(wrapper.queryByText("shaw")).toBeInTheDocument();
        expect(wrapper.queryByText("shaw@gmail.com")).toBeInTheDocument();

        fireEvent.click(wrapper.queryByText("shaw"));

        expect(profileClick).toBeCalled();

        fireEvent.click(wrapper.queryByText("Logout"));

        expect(logout).toBeCalled();
    });
});
