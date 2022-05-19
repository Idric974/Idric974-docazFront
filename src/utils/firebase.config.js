//*! Fichier d'origine.

// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: 'AIzaSyBZi_qOc7fUfxakGhRk5ORTCMwEALM6eSE',
//   authDomain: 'docaz-cb118.firebaseapp.com',
//   projectId: 'docaz-cb118',
//   storageBucket: 'docaz-cb118.appspot.com',
//   messagingSenderId: '483761721917',
//   appId: '483761721917',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

//! -------------------------------------------------

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBZi_qOc7fUfxakGhRk5ORTCMwEALM6eSE',
  authDomain: 'docaz-cb118.firebaseapp.com',
  projectId: 'docaz-cb118',
  storageBucket: 'docaz-cb118.appspot.com',
  messagingSenderId: '483761721917',
  appId: '483761721917',
});

export const auth = app.auth();
export default app;
