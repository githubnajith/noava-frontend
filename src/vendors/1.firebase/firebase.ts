import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBEWyfLMdCNHzqmtwzrnwa-HnceilE5Uyc',
  authDomain: 'noava-25035.firebaseapp.com',
  databaseURL: 'https://noava-25035-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'noava-25035',
  storageBucket: 'noava-25035.appspot.com',
  messagingSenderId: '712648951015',
  appId: '1:712648951015:web:d45556fefb9f1dd7ea8e42',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getDatabase(app);
export const storage = getStorage(app);
export const dbUrl = firebaseConfig.databaseURL;
export const auth = getAuth(app);
export default app;
