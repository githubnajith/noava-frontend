const useHttpWrite = () => {
  const [uploadComplete, setUploadComplete] = useState(false);

  const uploadInput = ({ dbUrlPath, inputData }) => {
    set(Dbref(dataBase, `${dbUrlPath}`), {
      ...inputData,
    }).then(() => {
      setUploadComplete(true);
      setTimeout(() => {
        setUploadComplete(false);
      }, 3000);
    });
  };

  return { uploadInput, uploadComplete };
};
export default useHttpWrite;
// -------------------
// react
import { useState } from 'react';
// firebase
import { ref as Dbref, set } from 'firebase/database';
import { dataBase } from '@/config/firebase';
