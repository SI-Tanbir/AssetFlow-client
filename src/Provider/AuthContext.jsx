import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../../firebase";
import axios from "axios";
import baseUrl from "../Hooks/baseUrlAxiosInstance";

export const MyContext = createContext("");


const AuthContext = ({ children }) => {

  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(false);

  const test = "you this is test from context api";

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User signed in:", user);

          baseUrl.post(`/jwt?email=${user?.email}`)
          .then(res=> {
            const token=res?.data?.token
            console.log(res?.data?.token)
            
            localStorage.setItem("access-token", token);
      }
    )
      
        setUser(true);

      } else {
        // User is signed out
        console.log("User signed out");
        localStorage.removeItem("access-token");

        setUser(false);
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  //adding signin
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

const signOutFirebase=()=>{

  return signOut(auth);
}


  return (

    <div>
      <MyContext.Provider value={{ test, signUp,  user, signIn ,signOutFirebase }}>
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default AuthContext;
