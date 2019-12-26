//File for logging in using google
import {firebase, googleAuthProvider} from '../firebase/firebase';

//Async action which starts and manages the logging in to the app
export const startLogIn = function() {
    return () => {
        //Returns a promise for success/failure
        //Asks firebase to authenticate the user via a popup using google accounts
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const login = (uid) => ({
    type:'LOGIN',
    uid,
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})