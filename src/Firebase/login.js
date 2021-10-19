import app from "./config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const signUpWithEmailPassword = (email, password, setCurrentUser) => {
  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setCurrentUser(user);
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const loginWithEmailPassword = (email, password, setCurrentUser) => {
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setCurrentUser(user);
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const googleSignIn = (setCurrentUser) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setCurrentUser(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

const logout = () => {
  const auth = getAuth(app);
  signOut(auth)
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log("error");
    });
};

export {
  signUpWithEmailPassword,
  loginWithEmailPassword,
  googleSignIn,
  logout,
};
