import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';

 export const AuthContext=createContext(null);
 const auth = getAuth(app);
 const googleProvider=new GoogleAuthProvider();
 const gitProvider=new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true);
    
    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    

    const profilesUpdate=(name)=>{
        setLoading(true);
      return  updateProfile(auth.currentUser,{
            displayName:name, photoURL:"https://example.com/jane-q-user/profile.jpg"

        })
    }

    const sigInUser=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{

       const unSubscribe= onAuthStateChanged(auth, (loggedUser)=>{
            console.log('observe loggedUser', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }

    },[])

    const logOut=()=>{
         return signOut(auth)
        
    }

    

    const AuthInfo={
        user,
        createUser,
        profilesUpdate,
        sigInUser,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;