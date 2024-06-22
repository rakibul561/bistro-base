/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import usePublic from "../Hooks/usePublic";


export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvaider = new GoogleAuthProvider();
    const axiosPublic = usePublic();
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
    const gooogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvaider);

    }

    //  logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = ({ name, photo }) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                        console.log(res.data);

                    })
                // get token ans store client
            }
            else {
                localStorage.removeItem('access-token');
                // TODU: remove token (if token stored in the client)
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])






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