"use client";
import Error_ui from "@/common-components/Eroor_ui";
const page = () => {
  const click = () => {
    return <Error_ui errorMessage="hi" pageStatus_msg="bye" />;
  };
  return (
    <>
      <h1>Test</h1>
      <button className="bg-green-500 p-3 rounded-full">test</button>
    </>
  );
};

export default page;
