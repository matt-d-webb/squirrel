import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyCa_m3M7R0h-_iLHVZk8TJ4U-JO7ab7UoA",
  authDomain: "squirrel-my-nuts-2020.firebaseapp.com",
  databaseURL: "https://squirrel-my-nuts-2020.firebaseio.com",
  projectId: "squirrel-my-nuts-2020",
  storageBucket: "squirrel-my-nuts-2020.appspot.com",
  messagingSenderId: "769665862882",
  appId: "1:769665862882:web:edb4c19787bea3b59722bb"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
