import React, { useEffect, useState, useContext, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter, useHistory, useParams } from "react-router-dom";

// `UI Components`.
import SimpleTable from '../../ui-components/SimpleTable';

// `Services`.
import { fetchTransactionsList } from '../../services';

// `Context`.
import AppContext from '../../AppContext';

function TransactionDashboard(props) {
  const history = useHistory();
  const { id: accountId } = useParams();
  const { selectedAccount, setTransactionAsSelected } = useContext(AppContext);

  const [rowsData, setRowsData] = useState([]);
  const [title] = useState(selectedAccount.account_name);

  useEffect(() => {
    fetchTransactionsList(accountId).then(response => {
      setRowsData(response.data);
    });
    console.log('selectedAccount: ', selectedAccount);
  }, []);

  const columnDefs = [
    { field: 'id', headerName: 'Transaction ID' },
    { field: 'account_id', headerName: 'Account ID' },
    { field: 'from', headerName: 'From Account' },
    { field: 'transaction_date', headerName: 'Transaction Date' },
    { field: 'amount', headerName: 'Amount' },
  ];

  return (
    <Fragment>
      <Typography variant="h3" gutterBottom>
        {title} - Transactions List
      </Typography>
      <SimpleTable
        columnDefs={columnDefs}
        rowsData={rowsData}
        onRowclick={(row) => {
          setTransactionAsSelected(row);
          history.push(`/transaction-detail`);
        }}
      />
    </Fragment>
  );
}

export default withRouter(TransactionDashboard);