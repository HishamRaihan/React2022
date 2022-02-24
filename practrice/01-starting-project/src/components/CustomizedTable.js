import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TablePagination } from "@material-ui/core";
// import TablePaginationTest from "./TablePaginationTest";
// import TablePagination from "@material-ui/core/TablePagination";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


export default function CustomizedTables() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const data = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
        createData("Eclair", 262, 16.0, 24, 6.0),
        createData("Cupcake", 305, 3.7, 67, 4.3),
        createData("Gingerbread", 356, 16.0, 49, 3.9),
        createData("Gingerbread2", 356, 16.0, 49, 3.9),
        createData("Gingerbread3", 356, 16.0, 49, 3.9),
        createData("Gingerbread4", 356, 16.0, 49, 3.9),
        createData("Gingerbread5", 356, 16.0, 49, 3.9),
        createData("Gingerbread6", 356, 16.0, 49, 3.9),
        createData("Gingerbread7", 356, 16.0, 49, 3.9),
        createData("Gingerbread8", 356, 16.0, 49, 3.9),
        createData("Gingerbread9", 356, 16.0, 49, 3.9),
        createData("Gingerbread10", 356, 16.0, 49, 3.9),
        createData("Gingerbread11", 356, 16.0, 49, 3.9),
        createData("Gingerbread12", 356, 16.0, 49, 3.9),
        createData("Gingerbread13", 356, 16.0, 49, 3.9)
    ];
    
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const headers = data.reduce((output, entry) => {
        const result = output;
        Object.keys(entry).forEach((key) => {
            if (!result.includes(key)) result.push(key);
        });
        return result;
    }, []);

    return (
        <TableContainer component={Paper}>
            {/* <TablePagination rowsPerPageOptions={[10, 50]} /> */}
            {/* <TablePaginationTest rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} /> */}

            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {headers.map((key) => {
                            return (
                                <StyledTableCell key={key}>
                                    {
                                        // Convert camelcased values to uppercased values to be used as
                                        // dynamic headers
                                        key
                                            .replace(/([A-Z])/g, " $1")
                                            .replace(/^./, function (str) {
                                                return str.toUpperCase();
                                            })
                                    }
                                </StyledTableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(page * rowsPerPage, page + rowsPerPage)
                    .map((row) => (
                        <StyledTableRow key={row.name}>
                            {headers.map((key) => {
                                return (
                                    <StyledTableCell key={`${row.name}-${key}`}>
                                        {row[key]}
                                    </StyledTableCell>
                                );
                            })}
                        </StyledTableRow>
                    ))}
                </TableBody>
                {/* <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPageOptions).map((row) => (
            <StyledTableRow key={row.name}>
              {headers.map((key) => {
                return (
                  <StyledTableCell key={`${row.name}-${key}`}>
                    {row[key]}
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
          ))}
        </TableBody> */}
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
}
