import { useEffect, useState } from "react";
// ?------------------------------------------------------------------------------------------------
const useInputValidation = ({ input: input, numCount: numCount, type: type }) => {
  const [emptyErr, setEmptyErr] = useState(false);
  const [countErr, setCountErr] = useState(false);
  const [onFocus, setOnfocus] = useState(false);
  const [typeErr, setTypeErr] = useState(false);
  // ---------------------------
  // count error
  useEffect(() => {
    if (!type === "number" || !onFocus) return;
    const numcount_err = input.length;
    if (numcount_err > numCount || numcount_err < numCount) setCountErr(true);
    if (numcount_err === numCount) setCountErr(false);
  }, [input]);
  // ---------------------------
  // email validation
  useEffect(() => {
    if (!type === "email" || !onFocus) return;
    const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const email_validation = reg.test(input);
    setTypeErr(email_validation);
  }, [input]);
  // ---------------------------
  useEffect(() => {
    if (!input) setEmptyErr(true);
    if (input) setEmptyErr(false);
  }, [input]);

  const onfocus = () => {
    setEmptyErr(false);
    setOnfocus(true);
  };
  const onblur = () => {
    if (!input) setEmptyErr(true);
    setOnfocus(false);
  };

  return { onblur, onfocus, emptyErr, countErr, typeErr };
};

export default useInputValidation;
