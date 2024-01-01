// ! Used for fetch data from firebase realtime db only using react query
import { dbUrl } from "@/vendors/1.firebase/firebase";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// ?-------------------------------------------------------------------
// common fetcher for react query
const fetcher = async (baseUrl: string) => {
  const { data } = await axios.get(`${dbUrl}/${baseUrl}.json`);
  return data;
};
// ?-------------------------------------------------------------------
const useRtk_firebase_fetch = (baseUrl: string, queryId: string) => {
  return useQuery({
    queryKey: [queryId],
    queryFn: () => fetcher(baseUrl),
  });
};
export default useRtk_firebase_fetch;
