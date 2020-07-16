import React from 'react';

// `Material` Component.
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import useStyles from './SimpleTable.styles';

export default function SimpleTable({ columnDefs = [], rowsData = [], onRowclick = () => { } }) {
  const classes = useStyles();

  const getValue = (value) => {
    return value || '-';
  };

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columnDefs.map(({ headerName }) => headerName && <TableCell>{headerName}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.map((row) => {
              return (
                <TableRow onClick={() => onRowclick(row)}>
                  {columnDefs.map(column => {
                    return (
                      <TableCell>{getValue(row[column.field])}</TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
