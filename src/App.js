import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// `Material` Component.
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Routes from './Routes';

// `Context`.
import AppContext, { AppContextProvider } from './AppContext';

const browserHistory = createBrowserHistory();

function App() {
  const [selectedAccount, setSelectedAccount] = useState({});
  const [selectedTransaction, setSelectedTransaction] = useState({});
  const setAccountAsSelected = (accountDetails) => setSelectedAccount(accountDetails);
  const setTransactionAsSelected = (transactionDetails) => setSelectedTransaction(transactionDetails);

  return (
    <AppContextProvider value={{
      ...AppContext,
      selectedAccount,
      setAccountAsSelected,
      selectedTransaction,
      setTransactionAsSelected,
    }}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router history={browserHistory} basename="/simple-banking-app">
            <Routes />
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;