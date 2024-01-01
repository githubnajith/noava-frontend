// ? this compponent render model and dropdown and make models reverse
"use client";
// ---------------
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/vendors/2.redux/store";
import { useAppSelector } from "@/vendors/2.redux/store";
import { rdx_get_brandName, rdx_get_modelName, rdx_get_apple, rdx_get_no_sidecover } from "@/vendors/2.redux/1.skin/skin-slice";
//? -----------------------------------------------------------------------
const Model_dropdown_ui = () => {
  // ----------------------------
  const rdx_model_data = useAppSelector((state) => state.skin_reducer.get_model_data);
  const dispatch = useDispatch<AppDispatch>();
  // ----------------------------
  // models
  const [brandKey, setBrandKey] = useState<string>("");
  const [modelList, setModelList] = useState<any>([]);
  // ----------------------------
  const [brandName, setBrandName] = useState<string>("");
  const [modelName, setModelName] = useState<string>("");
  // ----------------------------
  // send brand and model
  useEffect(() => {
    if (!modelName) {
      dispatch(rdx_get_brandName(""));
      dispatch(rdx_get_modelName(""));
      return;
    }
    dispatch(rdx_get_brandName(brandName));
    dispatch(rdx_get_modelName(modelName));
  }, [modelName]);
  // ----------------------------
  // (No Sides )
  useEffect(() => {
    if (!modelName) return;
    const result = modelName.includes("(No Sides)");
    if (result) dispatch(rdx_get_no_sidecover(true));
    else dispatch(rdx_get_no_sidecover(false));
  }, [modelName]);

  // --------------
  // !for reversing data
  useEffect(() => {
    if (!brandKey || brandKey === "Choose Brand") {
      setModelName("");
      return;
    }
    // -------------
    setBrandName(rdx_model_data[brandKey]?.Brand);

    // -------------
    let data: any = [];
    Object.keys(rdx_model_data[brandKey].models).map((key) => {
      data.push(rdx_model_data[brandKey].models[key]);
    });
    setModelList(data.reverse());
  }, [brandKey, rdx_model_data]);
  // -----------------------------
  // get apple
  useEffect(() => {
    if (!brandKey || brandKey === "Choose Brand") {
      dispatch(rdx_get_apple(false));
      return;
    }
    if (rdx_model_data[brandKey].Brand === "Apple" || rdx_model_data[brandKey].Brand === "MacBook") dispatch(rdx_get_apple(true));
    else dispatch(rdx_get_apple(false));
  }, [brandKey]);
  //? -----------------------------------------------------------------------
  return (
    <>
      {rdx_model_data && (
        <div className="space-x-1 space-y-2">
          <h3 className="font-bold text-lg text-gray-500">Select Brand : </h3>
          {/* //! mobile brands */}
          <select
            onChange={(event) => {
              setBrandKey(event.target.value);
              setModelList([]);
            }}
            className="border border-black p-3 font-normal rounded-full bg-white"
          >
            <option value={undefined} className="font-normal text-red-700 text-center">
              Choose Brand
            </option>
            {rdx_model_data &&
              Object.keys(rdx_model_data).map((brandKey) => {
                return (
                  <option value={brandKey} key={brandKey} className="font-normal">
                    <ul>{rdx_model_data[brandKey]?.Brand}</ul>
                  </option>
                );
              })}
          </select>
          {/* //! models */}
          {brandKey === "Choose Brand" || !brandKey ? (
            ""
          ) : (
            <div className="flex flex-col">
              <h3 className="font-bold text-lg text-gray-500">Select Model : </h3>
              <select
                value={undefined}
                onChange={(e) => {
                  if (e.target.value === "Choose Model") {
                    setModelName("");
                    return;
                  }
                  setModelName(e.target.value);
                }}
                className="border border-black w-[300px] p-3 font-normal block rounded-full bg-white"
              >
                <option value={undefined} className="font-normal text-red-700 text-center ">
                  Choose Model
                </option>
                {modelList &&
                  modelList?.map((model: any) => {
                    return (
                      <option key={model?.modelName} value={model?.modelName}>
                        {model?.modelName}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}
          {!modelName && <span className="text-sm  text-red-500 font-semibold block">* Choose model before buy</span>}
        </div>
      )}
    </>
  );
};

export default Model_dropdown_ui;
