import React, { useEffect, useState, useContext, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter, useHistory } from "react-router-dom";

// `UI Components`.
import SimpleTable from '../../ui-components/SimpleTable';

// `Services`.
import { fetchAccountList } from '../../services'

// `Context`.
import AppContext from '../../AppContext';

function AccountDashboard() {
  const history = useHistory();
  const { setAccountAsSelected } = useContext(AppContext);
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    fetchAccountList().then(response => {
      setRowsData(response.data);
    });
  }, []);

  const columnDefs = [
    { field: 'account_number', headerName: 'Account Number' },
    { field: 'account_name', headerName: 'Account Name' },
    { field: 'account_type', headerName: 'Type' },
    { field: 'balance', headerName: 'Balance' },
    { field: 'currency', headerName: 'Currency' },
  ];

  return (
    <Fragment>
      <Typography variant="h3" gutterBottom>
        Accounts List
      </Typography>
      <SimpleTable
        columnDefs={columnDefs}
        rowsData={rowsData}
        onRowclick={(row) => {
          setAccountAsSelected(row);
          history.push(`/transaction/${row.id}`);
        }}
      />
    </Fragment>
  );
}

export default withRouter(AccountDashboard);