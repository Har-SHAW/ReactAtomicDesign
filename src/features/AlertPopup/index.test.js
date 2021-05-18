import AlertDialogReducer, { closeAlert, openAlert } from ".";

describe("alert test", () => {
    it("open test", () => {
        expect(AlertDialogReducer(undefined, openAlert("Hai hello"))).toEqual({
            open: true,
            content: "Hai hello",
        });
    });
    it("close test", () => {
        expect(AlertDialogReducer({ open: true }, closeAlert())).toEqual({
            open: false,
            content: "",
        });
    });
});
