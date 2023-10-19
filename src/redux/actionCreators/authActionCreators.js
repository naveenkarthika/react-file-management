import firebaseApp from '../../configs/firebase';
import * as types from '../actionTypes/authActionTypes';

const logIn = (payload) => {
    return {
        type: types.LOGIN,
        payload
    }
}

const sigUp = (payload) => {
    return {
        type: types.SIGNUP,
        payload
    }
}

const logout = () => {
    return {
        type: types.LOGOUT
    }
}

// Action creators

export const signInUser = (email, password, redirect) => (dispatch) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(res => {
        dispatch(logIn(Object.assign({}, {
            uid: res?.user?.uid,
            displayName: res?.user?.displayName,
            email: res?.user?.email,
            token: res?.user?.multiFactor?.user?.accessToken
        })))
        redirect('/dashboard')
    }).catch(err => alert("Invalid credentials"));
}

export const signUpUser = (name, email, password, redirect) => (dispatch) => {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(user => {
        firebaseApp.auth().currentUser.updateProfile({
            displayName: name,
        }).then(async () => {
            const currentUser = await firebaseApp.auth().currentUser;
            dispatch(sigUp(Object.assign({}, {
                uid: currentUser?.uid,
                displayName: currentUser?.displayName,
                email: currentUser?.email,
                token: currentUser?.multiFactor?.user?.accessToken
            })));
            redirect('/dashboard')
        }).catch(err => {
            console.log('err', err)
        })
    }).catch(err => {
        const Error = err?.code === 'auth/email-already-in-use' ? `Email already exists` : err?.code === 'auth/weak-password' ? `Password weak` : err?.code === 'auth/invalid-email' ? 'Invalid Email' : err?.code;
        if(Error) {
            alert(Error);
            return;
        }
    })
}

export const logoutUser = () => (dispatch) => {
    firebaseApp.auth().signOut().then(() => {
        dispatch(logout());
    })
}

export const checkIsLoggedIn = () => (dispatch) => {
    firebaseApp.auth().onAuthStateChanged(user => {
        if(user) {
            dispatch(logIn(Object.assign({}, {
                uid: user?.uid,
                displayName: user?.displayName,
                email: user?.email,
                token: user?.multiFactor?.user?.accessToken
            })))
        }
    })
}