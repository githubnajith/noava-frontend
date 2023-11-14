import {dbUrl} from '@/config/firebase';

export const fetcher = async (baseUrl: string) => {
  const res = await fetch(`${dbUrl}/${baseUrl}.json`);
  const data = res.json();
  return data;
};
