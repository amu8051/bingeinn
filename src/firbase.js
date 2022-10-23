// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCEHvyTV7D_rFPLy85QOj9JMHT4Cmh5Lbw',
  authDomain: 'netflix-clone-33048.firebaseapp.com',
  projectId: 'netflix-clone-33048',
  storageBucket: 'netflix-clone-33048.appspot.com',
  messagingSenderId: '523688783233',
  appId: '1:523688783233:web:221c95e290dc48ded8cc80',
  measurementId: 'G-SL58VJ0JM0',
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
