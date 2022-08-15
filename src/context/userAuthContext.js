import React, { createContext, useContext } from 'react'

import { GoogleAuthProvider , signInWithPopup} from 'firebase/auth';
import { auth } from '../config/firebase';

const userAuthContext=createContext();

export function userAuthContextProvider ({children})  {
    function googleSignIn()
    {
        const googleProvider= new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider);
    }


  return (
   <userAuthContext.Provider value={{googleSignIn}}>{children}</userAuthContext.Provider>
  )
}

export function useUserAuth(){
    return  useContext(userAuthContext);
}