import axios from 'axios';

// `Services`.
import {
  endPoints,
} from '../config';

export const fetchAccountList = async () => {
  return await axios.get(endPoints.accounts());
}
