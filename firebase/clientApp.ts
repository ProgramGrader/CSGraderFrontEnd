import * as firebase from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getRemoteConfig } from 'firebase/remote-config';
import { getPerformance } from 'firebase/performance';
import {func} from "prop-types";

const appName = 'csgrader';

let app: firebase.FirebaseApp;

if (firebase.getApps().length > 0) {
    app = firebase.getApp(appName);
} else {
    app = firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    },
        appName
    );
}

// export that instead of 'firebase'
export { app };

let analytics; let remoteConfig; let performance;

// Initialize Analytics and get a reference to the service
// Ensure environment is supported

const analyticsSupported: boolean = await isSupported().then((val) => {
    return val;
}).catch(() => {
    return false;
});



if (app.name && typeof window !== 'undefined' &&  analyticsSupported ) {
    analytics = getAnalytics(app);
}

// Initialize Remote Config and get a reference to the service
// getRemoteConfig(app);

// Initialize Performance Monitoring and get a reference to the service
// getPerformance(app);

export {analytics,  remoteConfig, performance};