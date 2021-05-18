import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import TableComp from "../../molecules/Table";
import SearchBar from "../../atoms/SearchBar/index";
import PopUpMolecule from "../PopUp";
import { useSelector } from "react-redux";
import {
    onTableClick,
    onDelete,
    drop,
    onServingsChange,
    onClosePopUp,
    closeServings,
    onCustomerNameSave,
} from "../../../utils/tablesList/index";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.containerSecondary.dark
                : theme.palette.containerSecondary.light,
        [theme.breakpoints.down("sm")]: {
            height: "calc(30vw + 60px)",
        },
    },
    input: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(51, 63, 62)",
    },
    inputField: {
        width: "25vw",
        margin: "20px 0px",
        marginTop: "0px",
        height: "40px",
        background: theme.palette.type === "dark" ? "transparent" : "white",
        [theme.breakpoints.down("sm")]: {
            width: "90vw",
        },
    },
    list: {
        height: "calc(90vh - 60px)",
        overflowY: "auto",
        overflowX: "hidden",
        [theme.breakpoints.down("sm")]: {
            transform: "rotate(-90deg) translateY(-30vw)",
            transformOrigin: "right top",
            width: "30vw",
            height: "100vw",
        },
    },
}));

const TablesList = (props) => {
    const [searchBarText, setSearchBarText] = useState("");

    const popupData = useSelector((state) => state.popupData);

    const style = useStyles();

    let timer;

    const handleKeyUp = (event) => {
        clearTimeout(timer);
        timer = setTimeout(
            doneTypingTableSearchBar.bind(null, event.target.value),
            400
        );
    };

    const doneTypingTableSearchBar = (searchText) => {
        setSearchBarText(searchText);
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    return (
        <Box className={style.root}>
            <Box className={style.input}>
                <SearchBar
                    placeholder="Search by Table Name"
                    onChange={handleKeyUp}
                    className={style.inputField}
                    inputProps={{ "data-testid": "search-tables" }}
                />
            </Box>

            {popupData.isOpen && (
                <PopUpMolecule
                    popup={{
                        open: popupData.isOpen,

                        close: onClosePopUp,

                        closeServings: closeServings,

                        id: props.editablePopup
                            ? props.tableData[popupData.tableIndex].id
                            : props.tableData[popupData.tableIndex].tableId,

                        totalPrice:
                            props.tableData[popupData.tableIndex].totalPrice,

                        user: props.waiterData.name,

                        showCloseServings:
                            props.tableData[popupData.tableIndex].items
                                .length &&
                            props.tableData[popupData.tableIndex].tableName,

                        editable: props.editablePopup,
                    }}
                    popupData={{
                        items: props.tableData[popupData.tableIndex].items,
                        onServingsChange: onServingsChange,
                        onDelete: onDelete,
                        editable: props.editablePopup,
                    }}
                    customerName={
                        props.tableData[popupData.tableIndex].tableName
                    }
                    onSave={onCustomerNameSave}
                />
            )}

            <Box className={style.list}>
                {props.tableData
                    .filter((table) =>
                        table.tableName
                            .toLowerCase()
                            .includes(searchBarText.toLowerCase())
                    )
                    .map((element) => (
                        <TableComp
                            key={"table-" + element.id}
                            onDragOver={allowDrop}
                            onDrop={(event) => drop(event, element.id)}
                            onClick={() => {
                                console.log("clicked");
                                onTableClick(element.id);
                            }}
                            data={{
                                ...element,
                                isServings: !props.editablePopup,
                            }}
                        />
                    ))}
            </Box>
        </Box>
    );
};

export default TablesList;
