import React from 'react';
import { createContext } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext (null)

const auth = getAuth (app);

const googleAuthProvider = new GoogleAuthProvider();

const githubAuthProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {

    // const user = {displayName: 'Omar'}
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth , email, password);
    }

    const updateUserProfileImage = (photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser , photoURL)
       
     }; 


    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleAuthProvider);
    }

    const signInWithGithub = ()=>{
        return signInWithPopup(auth, githubAuthProvider);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut (auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
         console.log('logged in user inside auth state observer', loggedUser)  
         setUser (loggedUser);  
         setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])




    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfileImage,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;