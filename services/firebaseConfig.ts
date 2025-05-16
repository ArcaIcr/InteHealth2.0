import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnAWd1GEiuxQR0ch-PuRz6vZnN5FmvS2M",
    authDomain: "intehealth-9c4e0.firebaseapp.com",
    projectId: "intehealth-9c4e0",
    storageBucket: "intehealth-9c4e0.firebasestorage.app",
    messagingSenderId: "1092409172605",
    appId: "1:1092409172605:web:6b73688008ffa1db658714",
    measurementId: "G-S7DDMY8NKN"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 