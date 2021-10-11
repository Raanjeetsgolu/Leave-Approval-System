import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";


const config ={
  apiKey: "AIzaSyAq_PWmr97j8odG0qzj1sJOJWlEX_Yddjo",
  authDomain: "leave-approval-system.firebaseapp.com",
  databaseURL:"https://leave-approval-system.firebaseapp.com",
  projectId: "leave-approval-system",
  storageBucket: "leave-approval-system.appspot.com",
  messagingSenderId: "691668587265",
  appId: "1:691668587265:web:9933f464a1c912bbba0100"
};

const app=initializeApp(config);
const db=getFirestore(app);

const auth=getAuth(app);
// const rv= RecaptchaVerifier(app);
//  const signin= signInWithPhoneNumber(app)

export{db,auth}

