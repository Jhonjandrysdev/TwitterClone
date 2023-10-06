// Import the functionou need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, query, collection, onSnapshot, updateDoc,getDoc, arrayUnion, doc, arrayRemove} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa3nMVzkd8rz31-kTVp-WAydMZUa-CPIA",
  authDomain: "twitter-cb65d.firebaseapp.com",
  projectId: "twitter-cb65d",
  storageBucket: "twitter-cb65d.appspot.com",
  messagingSenderId: "85023014931",
  appId: "1:85023014931:web:b715b3ba988e7061767fe6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
{
  /*Se inicializa la aplicación app de firebase */
}
const googleAuth = new GoogleAuthProvider();
const database = getFirestore(app);

export const registrerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInGoogle = () => {
  return signInWithPopup(auth, googleAuth);
};

export const out = async () => {
  await signOut(auth);
};

export const saveTweets = async (NuevoTweet, likes, users) => {
  await addDoc(collection(database, "TweetsUser"), {
    NuevoTweet,
    likes,
    users
  });
};

export const getOnTweets = async (callback) =>{ 
 const queryTweets = query(collection(database, 'TweetsUser'));
  onSnapshot(queryTweets,callback)
}
export const savelikeTweet = (id,likes,user) =>{
  return updateDoc(doc(database,'TweetsUser',id),{likes,users:arrayUnion(user)}) 
}
export const getTweetId = (id) =>{
  return getDoc(doc(database,'TweetsUser',id))
}
export const getDislikeTweet = (id,likes,user) =>{
  return updateDoc(doc(database,'TweetsUser',id),{likes,users:arrayRemove(user)}) 
}
