import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyITpL2MZRog-X6eNySwTUtPi-0O6bOjc",
  authDomain: "fakestory-9fb8d.firebaseapp.com",
  projectId: "fakestory-9fb8d",
  storageBucket: "fakestory-9fb8d.appspot.com",
  messagingSenderId: "743247951622",
  appId: "1:743247951622:web:6d2818f8184644f1009087",
  measurementId: "G-1X3ELE5XN4",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
    
