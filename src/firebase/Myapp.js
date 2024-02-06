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
  apiKey: "AIzaSyC9qvKc13N8wTl4cPkDPiInribTQHPe8Fs",
  authDomain: "twitter-a89e1.firebaseapp.com",
  projectId: "twitter-a89e1",
  storageBucket: "twitter-a89e1.appspot.com",
  messagingSenderId: "731497016088",
  appId: "1:731497016088:web:94719171825000e11c0c6d"
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
