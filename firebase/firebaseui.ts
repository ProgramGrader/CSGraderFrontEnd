import {getAuth} from 'firebase/auth';
import * as firebaseui from 'firebaseui';
// import * as firebaseuicss from 'firebaseui/dist/firebaseui.css';
import clientApp from './clientApp';

const ui = new firebaseui.auth.AuthUI(getAuth(clientApp.app));


const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true
};
