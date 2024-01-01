import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//? ----------------------------------------------------------------------------
interface initialState_ts {
  address_upload_state: boolean;
  edit_address: boolean;
  error_state: boolean;
}
//? ----------------------------------------------------------------------------

const initialState: initialState_ts = {
  address_upload_state: false,
  edit_address: false,
  error_state: false,
};
//? ----------------------------------------------------------------------------

const account = createSlice({
  name: "account",
  initialState,
  reducers: {
    // -----------------
    rdx_address_upload_state: (state, action: PayloadAction<boolean>) => {
      state.address_upload_state = action.payload;
    },
    // -----------------
    rdx_edit_address: (state, action: PayloadAction<boolean>) => {
      state.edit_address = action.payload;
    },
    // -----------------
    rdx_error_state: (state, action: PayloadAction<boolean>) => {
      state.error_state = action.payload;
    },
  },
});
//? ----------------------------------------------------------------------------
export const { rdx_address_upload_state, rdx_edit_address,rdx_error_state } = account.actions;
export default account.reducer;
