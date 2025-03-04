import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://job-portal-server-mu.vercel.app/jwt', user, { withCredentials: true })
                    .then(data => {
                        // console.log('Login', data.data);
                        setLoading(false);
                    })
            }
            else {
                axios.post('https://job-portal-server-mu.vercel.app/logout', {}, { withCredentials: true })
                    .then(data => {
                        // console.log(data.data);
                        setLoading(false);
                    })
            }
            
        })

        return () => {
            unSubsCribe();
        }

    }, [])

    const authInfo = { createUser, signInWithGoogle, loading, user, signInUser, signOutUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;