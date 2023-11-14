import {useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { User } from 'firebase/auth';
// ------------------------------------------------
export const useUserAuth = () =>{
   // auth----------
   const [userAuth, setUserAuth] = useState<User | null>(null);
   useEffect(() => {
     onAuthStateChanged(auth, (user) => user && setUserAuth(user));
   }, [userAuth]);
   const userUid = userAuth?.uid
   const email = userAuth?.email
   return {userUid,email,userAuth};
}