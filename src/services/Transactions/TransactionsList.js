import axios from 'axios';

// `Services`.
import {
  endPoints,
} from '../config';

export const fetchTransactionsList = async (accountId) => {
  return await axios.get(endPoints.transactions(accountId));
}
