
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContex';
import { auth } from '../Firebase/firebase.init';
import { useEffect, useState } from 'react';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    // Create user
    // Register ar janno
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // Sing In
    const singInUser = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    // Sing Out
    const singOutUser = ()=>{
        return signOut(auth)
    }
    // OnAuthChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log("current user here",currentUser)

        })
        return()=>{
            unSubscribe()
        }
    },[])
    // onAuthStateChanged(auth,(currentUser)=>{
    //     if(currentUser){
    //         console.log("if statement right now",currentUser)
    //     }
    //     else{
    //         console.log("user nai")
    //     }
    // })
    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        singOutUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;