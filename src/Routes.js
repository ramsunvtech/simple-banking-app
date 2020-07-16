import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// `Material` Component.
import Box from '@material-ui/core/Box';

import {
  AccountDashboard,
  TransactionDashboard,
  TransactionDetail,
} from './modules';

import {
  AppBar,
} from './ui-components';

const Routes = () => {
  return (
    <Fragment>
      <AppBar />
      <Box component="div" m={2}>
        <Switch>
          <Redirect
            exact
            from="/"
            to="/dashboard"
          />
          <Route path="/dashboard">
            <AccountDashboard />
          </Route>
          <Route path="/transaction/:id">
            <TransactionDashboard />
          </Route>
          <Route path="/transaction-detail">
            <TransactionDetail />
          </Route>
        </Switch>
      </Box>
    </Fragment>
  );
};

export default Routes;
