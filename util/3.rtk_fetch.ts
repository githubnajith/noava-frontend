import {useQuery} from 'react-query';
// ---------------------------------
export const Rtk_fetch = () => {
  const reactQuery_config = {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnReconnect: false,
  };
  const fetch_data = async () => {
    //  const res = await fetch(`${dbUrl}/${baseUrl}.json`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!res.ok) {
      throw 'something went wrong';
    }
    const data = await res.json();
    return data;
  };
  const {data: initialData, isLoading} = useQuery(['q1'], fetch_data, reactQuery_config);
  return {initialData, isLoading};
};
