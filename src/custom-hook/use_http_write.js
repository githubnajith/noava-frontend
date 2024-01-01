// react
import { useState } from "react";
// firebase
import { ref as Dbref, set } from "firebase/database";
import { dataBase } from "@/vendors/1.firebase/firebase";
// ?---------------------------------------------------------------------------------
const useHttpWrite = () => {
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadStatus, setUploadState] = useState(false);

  const uploadInput = ({ dbUrlPath, inputData }) => {
    setUploadState(true);
    set(Dbref(dataBase, `${dbUrlPath}`), {
      ...inputData,
    }).then(() => {
      setUploadState(false);
      setUploadComplete(true);
      setTimeout(() => {
        setUploadComplete(false);
      }, 3000);
    });
  };

  return { uploadInput, uploadComplete, uploadStatus };
};
export default useHttpWrite;
