import popupDataSlice, { openPopup, closePopup, changeData } from ".";

describe("Popup Data Slice", () => {
    it("Initial state", () => {
        expect(popupDataSlice(undefined, {})).toEqual({
            tableIndex: 0,
            isOpen: false,
        });
    });
    it("Open popup", () => {
        expect(popupDataSlice(undefined, openPopup())).toEqual({
            tableIndex: 0,
            isOpen: true,
        });
    });
    it("Close popup", () => {
        expect(
            popupDataSlice(
                {
                    tableIndex: 0,
                    isOpen: true,
                },
                closePopup()
            )
        ).toEqual({
            tableIndex: 0,
            isOpen: false,
        });
    });
    it("change data", () => {
        expect(
            popupDataSlice(undefined, changeData({ tableIndex: 2 }))
        ).toEqual({
            tableIndex: 2,
            isOpen: true,
        });
    });
});
