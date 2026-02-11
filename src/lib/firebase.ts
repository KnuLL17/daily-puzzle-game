import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//     apiKey: "AIzaSyDYEABbH5LEeB5dbbRUwPHINMgZC0H5CG8",
//     authDomain: "server-app-job-4a960.firebaseapp.com",
//     projectId: "server-app-job-4a960",
//     appId: "1:110916839067:web:03b36f3bbdc9773c50083e"
// };

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
