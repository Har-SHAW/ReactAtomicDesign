import waitersListSlice, {
    addServingsToWaiterList,
    saveAge,
    saveGender,
    savePhoneNo,
    saveUser,
} from ".";

const testData = {
    name: null,
    email: null,
    age: "",
    phoneNo: "",
    gender: "",
    history: [],
    picture: null,
    noOfServings: 0,
};

describe("waiters list test", () => {
    it("initial data", () => {
        expect(waitersListSlice(undefined, {})).toEqual({
            name: null,
            email: null,
            age: "",
            phoneNo: "",
            gender: "",
            history: [],
            picture: null,
            noOfServings: 0,
        });
    });
    it("add servings to waiters list", () => {
        expect(
            waitersListSlice(
                testData,
                addServingsToWaiterList("Serving object")
            )
        ).toEqual({
            name: null,
            email: null,
            age: "",
            phoneNo: "",
            gender: "",
            history: ["Serving object"],
            picture: null,
            noOfServings: 1,
        });
    });
    it("save age", () => {
        expect(waitersListSlice(testData, saveAge(21))).toEqual({
            name: null,
            email: null,
            age: 21,
            phoneNo: "",
            gender: "",
            history: [],
            picture: null,
            noOfServings: 0,
        });
    });
    it("save gender", () => {
        expect(waitersListSlice(testData, saveGender("Male"))).toEqual({
            name: null,
            email: null,
            age: "",
            phoneNo: "",
            gender: "Male",
            history: [],
            picture: null,
            noOfServings: 0,
        });
    });
    it("save phoneNo", () => {
        expect(waitersListSlice(testData, savePhoneNo("9090909090"))).toEqual({
            name: null,
            email: null,
            age: "",
            phoneNo: "9090909090",
            gender: "",
            history: [],
            picture: null,
            noOfServings: 0,
        });
    });
    it("save user", () => {
        expect(
            waitersListSlice(
                testData,
                saveUser({
                    name: "shaw",
                    email: "shaw@gmail.com",
                    picture: "link to  picture",
                })
            )
        ).toEqual({
            name: "shaw",
            email: "shaw@gmail.com",
            age: "",
            phoneNo: "",
            gender: "",
            history: [],
            picture: "link to  picture",
            noOfServings: 0,
        });
    });
});
