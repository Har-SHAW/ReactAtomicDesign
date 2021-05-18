import { fireEvent, render } from "@testing-library/react";
import LoginButton from ".";

describe("Login Button test", () => {
    it("render", () => {
        const mock = jest.fn();
        const wrap = render(<LoginButton login={mock} />);
        expect(wrap).toBeDefined();

        expect(wrap.queryByText("Login")).toBeInTheDocument();
        fireEvent.click(wrap.queryByText("Login"));

        expect(mock).toBeCalled();
    });
});
