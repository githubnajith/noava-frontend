import { useState, useEffect } from "react";
// ----------------------------------------------------

const useGetState = (intialState:any) => {
  const [getState, setGetState] = useState<string | null | number>(intialState);
  const getStateLift = (data: any) => setGetState(data);
  return { getStateLift, getState };
};

export default useGetState;
