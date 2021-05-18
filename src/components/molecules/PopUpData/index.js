import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    OutlinedInput,
    TableHead,
    TableRow,
    Box,
    Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import PropTypes from "prop-types";

const PopupData = (props) => {
    return (
        <Box>
            {props.items.length > 0 ? (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body2">
                                        S.No
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        Name
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        Price
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        Servings
                                    </Typography>
                                </TableCell>

                                {props.editable && (
                                    <TableCell>
                                        <Typography variant="body2">
                                            Delete
                                        </Typography>
                                    </TableCell>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.items.map((row, index) => (
                                <TableRow key={"table-item-" + index}>
                                    <TableCell>
                                        <Typography>{index + 1}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography> {row.itemName}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{row.itemPrice}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        {props.editable ? (
                                            <OutlinedInput
                                                onChange={(event) =>
                                                    props.onServingsChange(
                                                        event,
                                                        index
                                                    )
                                                }
                                                value={row.servings}
                                                type="number"
                                                inputProps={{
                                                    "data-testid":
                                                        "serving-input-" +
                                                        index,
                                                }}
                                            />
                                        ) : (
                                            <Typography>
                                                {row.servings}
                                            </Typography>
                                        )}
                                    </TableCell>
                                    {props.editable && (
                                        <TableCell align="left">
                                            <Delete
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    props.onDelete(index)
                                                }
                                                aria-label={
                                                    "delete-button-" + index
                                                }
                                            />
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Box>
                    <Typography>No Items added to this table</Typography>
                    <Typography variant="caption">
                        Drag and drop an item on a table to add that item to the
                        table
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

PopupData.propsType = {
    items: PropTypes.array.isRequired,
    onServingsChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    editable: PropTypes.bool.isRequired,
};

PopupData.defaultProps = {
    items: [],
};

export default PopupData;
