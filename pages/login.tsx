// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';


// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/test'
    // We will display Google and Facebook as auth providers.
    // signInOptions: [
    //     firebase.auth.GithubAuthProvider.PROVIDER_ID
    // ]
};

function login() {
    return (
        <div>
            <h1>My App</h1>
            <p>Please sign-in:</p>
        </div>
    );
}

export default login;