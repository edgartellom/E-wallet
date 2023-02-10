
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBXy8ahKPSssP3A1I0M7WVi9zER6uBab2s",
  authDomain: "prueba-de-funciones-4b9e8.firebaseapp.com",
  projectId: "prueba-de-funciones-4b9e8",
  storageBucket: "prueba-de-funciones-4b9e8.appspot.com",
  messagingSenderId: "589197491000",
  appId: "1:589197491000:web:34d30b1db2bbb90f631fcd"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
