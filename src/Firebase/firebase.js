import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyBZi_qOc7fUfxakGhRk5ORTCMwEALM6eSE',
  authDomain: 'docaz-cb118.firebaseapp.com',
  projectId: 'docaz-cb118',
  storageBucket: 'docaz-cb118.appspot.com',
  messagingSenderId: '483761721917',
  appId: '483761721917',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
