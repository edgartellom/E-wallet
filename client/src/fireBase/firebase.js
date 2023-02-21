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
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
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
  // apiKey: "AIzaSyCLQ5IrQLt0PVA43BnhNe8noLSlO2lL4A0",
  // authDomain: "sphoenix-4614d.firebaseapp.com",
  // projectId: "sphoenix-4614d",
  // storageBucket: "sphoenix-4614d.appspot.com",
  // messagingSenderId: "82543688503",
  // appId: "1:82543688503:web:86cdced7d2a95fa7aff8b2",
  // measurementId: "G-4WF1943WFE"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// export async function registerNewUser(user){
//   try {
//     const userRef= collection(db, "users")
//     await setDoc(doc(userRef, user.uid), user)
//   } catch (error) {
//     console.log(error);
//   }

// }
// export async function getUserInfo(uid) {
//   const docRef = doc(db, "users", uid);
//   const docSnap = await getDoc(docRef);
//   return docSnap.data();
// }

// export async function userExists(uid) {
//   const docRef = doc(db, "users", uid);
//   const docSnap = await getDoc(docRef);

//   return docSnap.exists();
// }

// export async function updateUser(user) {
//   console.log(user);
//   try {
//     const usersRef = collection(db, "users");
//     await setDoc(doc(usersRef, user.uid), user);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }



