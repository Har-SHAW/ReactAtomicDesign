import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Item from "../../molecules/Items/index";
import SearchBar from "../../atoms/SearchBar/index";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90vh",
        width: "100%",
        overflowY: "hidden",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.containerPrimary.dark
                : theme.palette.containerPrimary.light,
        [theme.breakpoints.down("sm")]: {
            height: "calc(100vh - 30vw - 20vh - 60px)",
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
        width: "100%",
        margin: "20px 5vw",
        marginTop: "0px",
        height: "40px",
        background: theme.palette.type === "dark" ? "transparent" : "white",
        [theme.breakpoints.down("sm")]: {
            marginTop: "20px",
        },
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        overflowY: "auto",
        height: "calc(90vh - 60px)",
        [theme.breakpoints.down("sm")]: {
            height: "calc(100vh - 30vw - 20vh - 60px - 80px)",
            gridTemplateColumns: "auto auto",
        },
    },
}));
const ItemsList = () => {
    const itemsData = useSelector((state) => state.itemsList);

    const [searchBarText, setSearchBarText] = useState("");

    const style = useStyles();

    let timer;

    const handleKeyUp = (event) => {
        clearTimeout(timer);
        timer = setTimeout(doneTypingItems.bind(null, event.target.value), 400);
    };

    const doneTypingItems = (searchText) => {
        setSearchBarText(searchText);
    };

    const drag = (event, data) => {
        event.dataTransfer.setData("itemId", data.id);
    };

    return (
        <Box className={style.root} variant="containerPrimary">
            <Box className={style.input}>
                <SearchBar
                    placeholder="Search by Item Name, by Course"
                    onChange={handleKeyUp}
                    className={style.inputField}
                    inputProps={{ "data-testid": "search-items" }}
                />
            </Box>
            <Box className={style.grid} aria-label="grid">
                {itemsData
                    .filter(
                        (item) =>
                            item.itemName
                                .toLowerCase()
                                .includes(searchBarText.toLowerCase()) ||
                            item.course
                                .toLowerCase()
                                .includes(searchBarText.toLowerCase())
                    )
                    .map((element) => (
                        <Item
                            key={"item-" + element.id}
                            data={element}
                            draggable={true}
                            onDragStart={(event) => drag(event, element)}
                        />
                    ))}
            </Box>
        </Box>
    );
};

export default ItemsList;
