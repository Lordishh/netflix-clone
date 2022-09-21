
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCW3NDE7GS_jEPIuar_hIYzcoKPocP1wJk",
  authDomain: "react-netflix-clone-7b716.firebaseapp.com",
  projectId: "react-netflix-clone-7b716",
  storageBucket: "react-netflix-clone-7b716.appspot.com",
  messagingSenderId: "774752991285",
  appId: "1:774752991285:web:a99b32c555b0a36046997c",
  measurementId: "G-JLD7WLREQP"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);