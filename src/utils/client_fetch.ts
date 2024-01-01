import { dbUrl } from "@/vendors/1.firebase/firebase";
// ---------------------------------------------------------
export const fetcher = async (baseUrl: string) => {
  const res = await fetch(`${dbUrl}/${baseUrl}.json`);
  const data = res.json();
  return data;
};
