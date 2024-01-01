import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import skin_reducer from "./1.skin/skin-slice";
import common_reducer from "./common/common-slice";
import account_reducer from "./2.account/account_slice";
//? ----------------------------------------------------------------------------
const store = configureStore({
  reducer: {
    skin_reducer,
    common_reducer,
    account_reducer,
  },
});
//? ----------------------------------------------------------------------------
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
