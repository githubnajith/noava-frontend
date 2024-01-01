import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//? ----------------------------------------------------------------------------
interface initialState_ts {
  logo_cut: boolean;
  side_cover: boolean;
  get_model_data: any;
  get_skin_data: any;
  get_finish_data: any;
  brand_name: string;
  model_name: string;
  get_apple: boolean;
  get_no_sidecover: boolean;
  get_device_type: string;
  is_custom_img: boolean;
  get_custom_img: any;
  with_cover_price: string;
  without_cover_price: string;
  get_price: string;
}
//? ----------------------------------------------------------------------------

const initialState: initialState_ts = {
  logo_cut: false,
  side_cover: false,
  get_model_data: "",
  get_finish_data: "",
  get_skin_data: "",
  brand_name: "",
  model_name: "",
  get_apple: false,
  get_no_sidecover: false,
  get_device_type: "",
  is_custom_img: false,
  get_custom_img: false,
  with_cover_price: "",
  without_cover_price: "",
  get_price: "",
};
//? ----------------------------------------------------------------------------

const auth = createSlice({
  name: "skin",
  initialState,
  reducers: {
    // -----------------
    rdx_get_skin_data: (state, action: PayloadAction<any>) => {
      state.get_skin_data = action.payload;
    },
    // -----------------
    rdx_logo_cut: (state, action: PayloadAction<boolean>) => {
      state.logo_cut = action.payload;
    },
    // -----------------
    rdx_sidecover: (state, action: PayloadAction<boolean>) => {
      state.side_cover = action.payload;
    },
    // -----------------
    rdx_get_model_data: (state, action: PayloadAction<any>) => {
      state.get_model_data = action.payload;
    },
    // -----------------
    rdx_get_finish_data: (state, action: PayloadAction<any>) => {
      state.get_finish_data = action.payload;
    },
    // -----------------

    rdx_get_brandName: (state, action: PayloadAction<string>) => {
      state.brand_name = action.payload;
    },
    // -----------------
    rdx_get_modelName: (state, action: PayloadAction<string>) => {
      state.model_name = action.payload;
    },
    // -----------------
    rdx_get_apple: (state, action: PayloadAction<boolean>) => {
      state.get_apple = action.payload;
    },
    // -----------------
    rdx_get_no_sidecover: (state, action: PayloadAction<boolean>) => {
      state.get_no_sidecover = action.payload;
    },
    // -----------------
    rdx_get_device_type: (state, action: PayloadAction<string>) => {
      state.get_device_type = action.payload;
    },
    // -----------------
    rdx_is_custom_img: (state, action: PayloadAction<boolean>) => {
      state.is_custom_img = action.payload;
    },
    // -----------------
    rdx_get_custom_img: (state, action: PayloadAction<any>) => {
      state.get_custom_img = action.payload;
    },
    // -----------------
    rdx_with_cover_price: (state, action: PayloadAction<string>) => {
      state.with_cover_price = action.payload;
    },
    // -----------------
    rdx_without_cover_price: (state, action: PayloadAction<string>) => {
      state.without_cover_price = action.payload;
    },
    // -----------------
    rdx_get_price: (state, action: PayloadAction<string>) => {
      state.get_price = action.payload;
    },
    // -----------------
  },
});
//? ----------------------------------------------------------------------------
export const {rdx_get_skin_data ,rdx_logo_cut, rdx_sidecover, rdx_get_brandName, rdx_get_model_data, rdx_get_finish_data, rdx_get_modelName, rdx_get_apple, rdx_get_no_sidecover, rdx_get_device_type, rdx_is_custom_img, rdx_get_custom_img, rdx_with_cover_price, rdx_without_cover_price, rdx_get_price } = auth.actions;
export default auth.reducer;
