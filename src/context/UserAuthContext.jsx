import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

export const userAuthContext = createContext()

import React from 'react'

const UserAuthContextProvider = ({ children }) => {
	const [user, setUser] = useState('')

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const logIn = (email, password) => {
    console.log('email', email);
		return signInWithEmailAndPassword(auth, email, password)
	}

  const logOut = () => {
    return signOut(auth)
  }

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
		})

		return () => {
			unsubscribe()
		}
	}, [])

	const value = {
    user,
    signUp,
    logIn,
    logOut,
    googleSignIn
  }

	return (
		<userAuthContext.Provider value={value}>
			{children}
		</userAuthContext.Provider>
	)
}

export default UserAuthContextProvider

export function useUserAuth() {
	return useContext(userAuthContext)
}
