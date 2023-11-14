const Logout_ui = () => {
  // auth----------
  const [userAuth, setUserAuth] = useState<User | undefined>(undefined);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => user && setUserAuth(user));
  }, [userAuth]);
  const [popup, setPopup] = useState<boolean>(false);
  // --------------------------------------------
  // logout
  const router = useRouter();
  const logout = () => {
    signOut(auth).then(() => {
      setPopup(true);
    });
  };
  const done = () => router.push('/');
  // --------------------------------------------
  return (
    <div>
      {popup && (
        <section className=' w-full flex items-center justify-center'>
          <div className='bg-gray-50 text-black border-black font-semibold px-4 py-2 text-center space-y-4 rounded-xl border absolute top-2  duration-200'>
            <p className='py-2 mt-4'>Sucessfully signout 👍 comback soon 😊</p>
            <button
              onClick={done}
              className='bg-green-500 p-3 rounded-full'
            >
              Done
            </button>
          </div>
        </section>
      )}
      {userAuth && (
        <div className='space-y-2 py-2 flex items-center justify-between px-4 lg:flex-col lg:justify-center gap-1'>
          <h3 className='font-[500]'>Logout account</h3>
          <button
            onClick={logout}
            className='bg-red-500 p-2 text-white border-2 rounded-full mb-4 hover:bg-white hover:text-red-500 hover:border-red-500'
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Logout_ui;
// -----------------------
import React, {useState, useEffect} from 'react';
// router
import {useRouter} from 'next/navigation';
// firebase
import {signOut, onAuthStateChanged} from 'firebase/auth';
import {auth} from '@/config/firebase';
import { User } from 'firebase/auth';