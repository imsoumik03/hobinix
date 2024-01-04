import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import gojo from '../../assets/tests/Gojo.jpeg';
import sukuna from '../../assets/tests/Sukuna.jpeg';

const Searchbar = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Container className="bg-neutral-950 border-slate-800 py-6 px-5 pl-2 w-[392px] min-h-screen">
            <div className="flex justify-center">
                <TextField
                    id="outlined-basic"
                    label="Search Here"
                    variant="outlined"
                />
            </div>
            <div className="">
                <Paper
                    sx={{ width: '100%', overflow: 'auto', marginTop: '20px' }}
                >
                    <TableContainer sx={{ maxHeight: '80vh', color: 'white' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableBody>
                                {rows
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map(row => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.code}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                {/* {columns.map(column => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {column.format &&
                                                        typeof value ===
                                                            'number'
                                                            ? column.format(
                                                                  value
                                                              )
                                                            : value}
                                                    </TableCell>
                                                );
                                            })} */}
                                                {/* <TableCell>
                                                    <img
                                                        src={gojo}
                                                        className="max-w-14 max-h-14 rounded-lg"
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col justify-center">
                                                        <span className="font-semibold text-lg">
                                                            imsoumik03
                                                        </span>
                                                        <span className="font-thin text-slate-400">
                                                            Soumik Ghosh
                                                        </span>
                                                    </div>
                                                </TableCell> */}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <span className='text-white text-xl font-semibold '>YET UNDER DEVELOPMENT PROCESS</span>
                    <div className="absolute bottom-3 right-2">
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            sx={{ backgroundColor: 'blue', color: 'white' }}
                        />
                    </div>
                </Paper>
            </div>
        </Container>
    );
};

const Container = styled.div`
    /* pagination*/
    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
        padding: 12.5px 10px;
        width: 290px;
        background-color: white;
        border-radius: 12px;
    }
    .css-97z993-MuiPaper-root {
        background-color: transparent;
    }
    .css-1ex1afd-MuiTableCell-root {
        border-bottom: 1px solid grey;
        color: white;
        padding: 5px;
    }
`;

export default Searchbar;

// const columns = [
//     { id: 'name', label: 'Name', minWidth: 170 },
//     { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//     {
//       id: 'population',
//       label: 'Population',
//       minWidth: 170,
//       align: 'right',
//       format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//       id: 'size',
//       label: 'Size\u00a0(km\u00b2)',
//       minWidth: 170,
//       align: 'right',
//       format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//       id: 'density',
//       label: 'Density',
//       minWidth: 170,
//       align: 'right',
//       format: (value) => value.toFixed(2),
//     },
//   ];
const columns = [
    { id: 'photo', label: 'Photo', minWidth: 170 },
    { id: 'results', label: 'Results', minWidth: 170 },
];

function createData(photo, results) {
    // const density = population / size;
    return { photo, results };
}

const rows = [
    createData('India', 'IN'),
    createData('China', 'CN'),
    createData('Italy', 'IT'),
    createData('United States', 'US'),
    createData('Canada', 'CA'),
    createData('Australia', 'AU'),
    createData('Germany', 'DE'),
    createData('Ireland', 'IE'),
    createData('Mexico', 'MX'),
    createData('Japan', 'JP'),
    createData('France', 'FR'),
    createData('United Kingdom', 'GB'),
    createData('Russia', 'RU'),
    createData('Nigeria', 'NG'),
    createData('Brazil', 'BR'),
];
