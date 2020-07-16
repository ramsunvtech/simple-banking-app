// @todo: This method will be removed if there is no base URL.
const getApiUrl = (apiName) => {
  return `${apiName}`;
};

export const endPoints = {
  accounts: () => getApiUrl('/bankingApi/accounts'),
  transactions: (id) => getApiUrl(`/bankingApi/transaction/${id}`),
};
