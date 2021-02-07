import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlCDJ3gI2iRPFoq_5euuP8aTDXC_f6FQc",
  authDomain: "qr-attendance-6bf46.firebaseapp.com",
  projectId: "qr-attendance-6bf46",
  storageBucket: "qr-attendance-6bf46.appspot.com",
  messagingSenderId: "634976301651",
  appId: "1:634976301651:web:b965c1e1913384940a8ca6",
  measurementId: "G-2RY1VNEB80"
  };


export const app=firebase.initializeApp(firebaseConfig)
export const db = app.firestore()



// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID