import axios from 'axios';
import {dbUrl} from '@/config/firebase';
// ---------------------------
export const fetchData = async (baseUrl: string) => {
  try {
    const res = await axios.get(`${dbUrl}/${baseUrl}.json`);
    const data = await res?.data;
    return data;
  } catch (error) {
    return undefined;
  }
};

