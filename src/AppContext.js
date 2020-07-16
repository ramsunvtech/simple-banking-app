import React from 'react';

const AppContext = React.createContext({
  accounts: [],
  transactions: [],
  setAccountAsSelected: () => {},
  setTransactionAsSelected: () => {},
  selectedAccount: {},
  selectedTransaction: {},
});

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export default AppContext;