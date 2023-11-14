'use client';
import React from 'react';

const Account = () => {
  // auth----------
  const [userAuth, setUserAuth] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => user && setUserAuth(user));
  }, [userAuth]);
  //  -----------------------------------

  return (
    <>
      {!userAuth && (
        <div className='text-center'>
          <Login_ui noRedirect={true} />
        </div>
      )}
      <div className='px-2 py-2 space-y-2 w-full lg:space-y-0 relative lg:grid lg:gap-6 lg:grid-cols-4 lg:place-items-center'>
        {userAuth && (
          <div className='w-full lg:w-60 lg:h-36 shadow border-2 hover:border-red-500 rounded-lg py-2 lg:py-6'>
            <Logout_ui />
          </div>
        )}
      </div>
    </>
  );
};

export default Account;
// ------------------------------
import {useEffect, useState} from 'react';
// ui
import Login_ui from '@/common-components/5.orders/Login_ui';
import Logout_ui from '@/common-components/5.orders/Logout_ui';
// firebase
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '@/config/firebase';
