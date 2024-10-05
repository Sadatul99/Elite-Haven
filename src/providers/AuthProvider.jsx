import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // Login Methods
    const signInWithEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    // Profile update
    const ProfileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    // Keep track the state
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
            // Once the state is set we can now turn off loading.
             setLoading(false) 
        })
        return () =>{
            unSubscribe()
        }
    },[])


    const authInfo = {
        user,
        createUser,
        signInWithEmail,
        logOut,
        ProfileUpdate,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;