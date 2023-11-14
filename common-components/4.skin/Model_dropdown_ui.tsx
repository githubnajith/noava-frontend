/* eslint-disable react-hooks/exhaustive-deps */
// ? this compponent render model and dropdown and make models reverse
"use client";
// ----------------------------------------------
const Model_dropdown_ui = (props: any) => {
  const router = useRouter();
  // ----------------------------------------------------------------------
  const model = props.model;
  // models
  const [brandKey, setBrandKey] = useState<string | null>(null);
  const [modelList, setModelList] = useState<any>([]);
  // ----------------------------
  const [brandName, setBrandName] = useState<string | null>(null);
  const [modelName, setModelName] = useState<any>(null);
  // send brand and model--------
  useEffect(() => {
    if (!modelName) {
      props.getBrandName(false);
      props.getModelName(false);
      return;
    }
    props.getBrandName(brandName);
    props.getModelName(modelName);
  }, [modelName]);
  // ----------------------------
  // (No Sides )
  useEffect(() => {
    if (!props.getNosideCover) return;
    if (!modelName) return;
    const result = modelName.includes("(No Sides)");
    if (result) props.getNosideCover(false);
    else props.getNosideCover(true);
  }, [modelName]);

  // --------------
  // !for reversing data
  useEffect(() => {
    if (!brandKey || brandKey === "Choose Brand") {
      setModelName("");
      return;
    }
    // -------------
    setBrandName(model[brandKey]?.Brand);
    // -------------
    let data: any = [];
    Object.keys(model[brandKey].models).map((key) => {
      data.push(model[brandKey].models[key]);
    });
    setModelList(data.reverse());
  }, [brandKey, model]);
  // -----------------------------
  // get apple
  useEffect(() => {
    if (!props.getLogocut) return;
    if (!brandKey || brandKey === "Choose Brand") {
      props.getLogocut(false);
      return;
    }
    if (model[brandKey].Brand === "Apple" || model[brandKey].Brand === "MacBook") props.getLogocut(true);
    else props.getLogocut(false);
  }, [brandKey]);
  // --------------------------------------------------------
  return (
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
        {model &&
          Object.keys(model).map((brandKey) => {
            return (
              <option value={brandKey} key={brandKey} className="font-normal">
                <ul>{model[brandKey]?.Brand}</ul>
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
                setModelName(false);
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
  );
};

export default Model_dropdown_ui;
// ---------------------------------------
import React, { useEffect, useState } from "react";
// firebase
import { useRouter } from "next/navigation";
