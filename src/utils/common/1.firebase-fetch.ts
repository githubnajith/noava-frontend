// ! Used for fetch data from firebase realtime db only
import { dbUrl } from "@/vendors/1.firebase/firebase";
import axios from "axios";
// ?-------------------------------------------------------------------
const firebase_fetcher = async (baseUrl: string) => {
  const { data } = await axios.get(`${dbUrl}/${baseUrl}.json`);
  return data;
};
export default firebase_fetcher;
