import React, { createContext } from 'react';
import 'firebase/auth'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser ]= useState(null)

    const googleSingIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const githubSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }







    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(() =>{
   const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
         })
         return () => unsubscribe()
    }, [])
    const authInfo = {user, googleSingIn,  logOut, githubSignIn, createUser, login}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;