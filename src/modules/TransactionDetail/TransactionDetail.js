import React, { useState, useContext, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter, useHistory, useParams } from "react-router-dom";

import Button from '@material-ui/core/Button';

// `UI Components`.
import SummaryBlock from '../../ui-components/SummaryBlock';

// `Context`.
import AppContext from '../../AppContext';

function TransactionDetail() {
  const history = useHistory();
  const { selectedTransaction } = useContext(AppContext);
  const [details] = useState(selectedTransaction);

  return (
    <Fragment>
      <Typography variant="h3" gutterBottom>
        Transactions Details -
        <Button href="#text-buttons" color="primary" onClick={() => history.goBack()}>
          Back to Transaction List
        </Button>
      </Typography>
      <SummaryBlock details={details} />
    </Fragment>
  );
}

export default withRouter(TransactionDetail);