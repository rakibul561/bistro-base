/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvaider = new GoogleAuthProvider();
    //  create user 
    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const gooogleSignIn =  () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvaider);
         
    }

    //  logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
   
    const updateUserProfile = ({name, photo}) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,  photoURL: photo
          })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])






    const authInfo = {
        user,
        loading,
        createuser,
        signIn,
        gooogleSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;