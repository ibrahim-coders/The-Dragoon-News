// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkV32jvuR4QpsFzgl7vJRTmVrlTfDSj18',
  authDomain: 'dragon-news-ca9fd.firebaseapp.com',
  projectId: 'dragon-news-ca9fd',
  storageBucket: 'dragon-news-ca9fd.firebasestorage.app',
  messagingSenderId: '706969513416',
  appId: '1:706969513416:web:567aeeee07e5e8e36124fd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
