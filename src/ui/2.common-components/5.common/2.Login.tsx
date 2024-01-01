"use client";
// -----------------
// firebase
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/vendors/1.firebase/firebase";
//? ----------------------------------------------------------------------------------------
const Login = () => {
  // firebase
  const provider = new GoogleAuthProvider();
  auth.languageCode = "it";

  //   const navigate = useNavigate();
  const login = () => signInWithPopup(auth, provider);

  // ----------------------------------------------------------------------
  return (
    <div className="flex items-center justify-center flex-col h-[60vh] lg:h-[80vh]">
      <img className="w-[150px] h-auto" src="/1.Home/logo/Noava-black-logo.png" loading="lazy" alt="mobile skins and wraps" />
      <h3 className="text-sm font-normal py-2 text-gray-500 tracking-[1px]">Upgrade Your Gadgets Look</h3>
      <main className="py-2 h-60 w-80 px-2 bg-gray-50 rounded-xl flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl tracking-[0.5px]">Login</h1>
        {/* ------------------------------ */}
        {/* show if user is logged in */}
        <div onClick={login} className="felx items-center justify-center space-x-4 bg-black px-3 py-2 rounded-full">
          <img className="w-8 inline" loading="lazy" src="/5.account/googleLogo.png" alt="google logo" />
          <span className="inline text-white">Login with google</span>
        </div>
        {/* ------------------------------ */}
      </main>
      <span className="py-2 text-sm text-gray-600">* please login to continue shopping</span>
    </div>
  );
};

export default Login;
