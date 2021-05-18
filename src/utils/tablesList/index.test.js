import store from "../../app/store";
import {
    onTableClick,
    onDelete,
    onServingsChange,
    drop,
    onCustomerNameSave,
    onClosePopUp,
    closeServings,
} from ".";
import { changeData, closePopup } from "../../features/popupData/index";
import {
    addServingsToWaiterList,
    saveUser,
} from "../../features/waiterServingsList";
import {
    addItemToTable,
    changeServings,
    deleteItem,
    editCustomerName,
    clearTable,
} from "../../features/tableList/index";
import { openAlert } from "../../features/AlertPopup";

describe("util tests", () => {
    const useDispatchSpy = jest.spyOn(store, "dispatch");

    store.dispatch(saveUser({ name: "shaw" }));

    it("on table click", () => {
        onTableClick(1);
        expect(useDispatchSpy).toBeCalledWith(
            changeData({
                tableIndex: 1,
            })
        );
    });

    it("on delete", () => {
        onDelete(1);
        expect(useDispatchSpy).toBeCalledWith(
            deleteItem({
                itemIndex: 1,
                tableIndex: 0,
            })
        );
    });

    it("onServingsChange", () => {
        const event = { target: { value: "2" } };
        onServingsChange(event, 1);
        expect(useDispatchSpy).toBeCalledWith(
            changeServings({
                servings: event.target.value,
                itemIndex: 1,
                tableIndex: 0,
            })
        );
    });

    it("drop with table name", () => {
        const mockFn = jest.fn();
        const preventDefMock = jest.fn();
        const event = {
            dataTransfer: { getData: mockFn },
            preventDefault: preventDefMock,
        };
        mockFn.mockReturnValue(1);

        drop(event, 1);
        expect(preventDefMock).toBeCalledTimes(1);

        expect(useDispatchSpy).toBeCalledWith(
            openAlert(
                "Click on the table, reserve the table by saving Customer's name"
            )
        );
    });

    store.dispatch(
        editCustomerName({
            tableId: 0,
            customerName: "Shaw",
        })
    );

    it("drop no table name", () => {
        const mockFn = jest.fn();
        const preventDefMock = jest.fn();
        const event = {
            dataTransfer: { getData: mockFn },
            preventDefault: preventDefMock,
        };
        mockFn.mockReturnValue(1);
        drop(event, 0);
        expect(preventDefMock).toBeCalledTimes(1);
        const itemsData = () => store.getState().itemsList;
        expect(useDispatchSpy).toBeCalledWith(
            addItemToTable({
                index: 0,
                itemData: itemsData().filter((ele) => ele.id === 1)[0],
            })
        );
    });
    it("close popup", () => {
        onClosePopUp();
        expect(useDispatchSpy).toBeCalledWith(closePopup());
    });
    it("close servings", () => {
        const noOfServings = () =>
            store.getState().waiterServingsList.noOfServings;

        const tableData = () => store.getState().tableList;
        closeServings();
        expect(useDispatchSpy).toBeCalledTimes(3);
        expect(useDispatchSpy).nthCalledWith(
            1,
            addServingsToWaiterList({
                ...tableData()[0],
                id: noOfServings(),
                tableId: 0,
            })
        );
        expect(useDispatchSpy).nthCalledWith(2, clearTable(0));
        expect(useDispatchSpy).nthCalledWith(3, closePopup());
    });
    it("customer name change", () => {
        onCustomerNameSave("Shaw");
        expect(useDispatchSpy).toBeCalledWith(
            editCustomerName({
                tableId: 0,
                customerName: "Shaw",
            })
        );
    });

    it("drop test no user", () => {
        const stateSpy = jest.spyOn(store, "getState");
        stateSpy.mockReturnValue({
            waiterServingsList: {
                name: null,
            },
        });
        const mockFn = jest.fn();
        const preventDefMock = jest.fn();
        const event = {
            dataTransfer: { getData: mockFn },
            preventDefault: preventDefMock,
        };
        mockFn.mockReturnValue(1);

        drop(event, 0);

        expect(useDispatchSpy).toBeCalledWith(
            openAlert("You need to login first")
        );
    });

    it("table click no user", () => {
        const stateSpy = jest.spyOn(store, "getState");
        stateSpy.mockReturnValue({
            waiterServingsList: {
                name: null,
            },
        });

        onTableClick(0);

        expect(useDispatchSpy).toBeCalledWith(
            openAlert("You need to login first")
        );
    });
});
