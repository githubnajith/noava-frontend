"use client";
// ----------------
import store from "./store";
import { Provider } from "react-redux";
// ------------------------------------------------
const Redux_provider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Redux_provider;
