import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM3aZlgfXQlq4gDJ0uL4aldV4J7JW3tqc",
  authDomain: "azad-healthcare.firebaseapp.com",
  projectId: "azad-healthcare",
  storageBucket: "azad-healthcare.appspot.com",
  messagingSenderId: "105636300847",
  appId: "1:105636300847:web:a193f024bad12a7d0cdeda",
};

const app = initializeApp(firebaseConfig);

export default app;
