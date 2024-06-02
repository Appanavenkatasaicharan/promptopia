'use client';

import { useContext, createContext, useState, useEffect } from "react";
import {
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "@app/firebase";
import axios from "axios";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [db,setDb] = useState(null)

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithRedirect(auth, provider)
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser)
      axios.post('/api/create-user',{
        userID : currentUser.uid,
        email : currentUser.email,
        username : currentUser.displayName,
        image : currentUser.photoURL
      })
    });
    // console.log(db);
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};