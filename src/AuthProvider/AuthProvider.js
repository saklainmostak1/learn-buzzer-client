import React, { createContext } from 'react';
import 'firebase/auth'
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
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
    const logOut = () =>{
        return signOut(auth)
    }
    useEffect(() =>{
   const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
         })
         return () => unsubscribe()
    }, [])
    const authInfo = {user, googleSingIn,  logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;