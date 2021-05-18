import itemsListSlice from ".";

describe("Item Slice", () => {
    it("After initialization", () => {
        expect(itemsListSlice(undefined, {})).toEqual(
            require("../../data/items.json")
        );
    });
});
