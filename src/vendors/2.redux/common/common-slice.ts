import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//? ----------------------------------------------------------------------------
interface initialState_ts {
  get_loading: boolean;
  get_user_login_state: boolean;
  get_baseUrl: string;
}
//? ----------------------------------------------------------------------------

const initialState: initialState_ts = {
  get_loading: false,
  get_user_login_state: false,
  get_baseUrl: "",
};
//? ----------------------------------------------------------------------------

const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    // -----------------
    rdx_get_loading: (state, action: PayloadAction<any>) => {
      state.get_loading = action.payload;
    },
    // -----------------
    rdx_get_login_state: (state, action: PayloadAction<boolean>) => {
      state.get_user_login_state = action.payload;
    },
    // -----------------
    rdx_get_baseUrl: (state, action: PayloadAction<string>) => {
      state.get_baseUrl = action.payload;
    },
    // -----------------
  },
});
//? ----------------------------------------------------------------------------
export const { rdx_get_loading, rdx_get_login_state, rdx_get_baseUrl } = common.actions;
export default common.reducer;
