import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBu-Oq-TiTyTLDZU5gcl7RxZpGoDXQdqdg",
    authDomain: "admindashboard-e4769.firebaseapp.com",
    projectId: "admindashboard-e4769",
    storageBucket: "admindashboard-e4769.appspot.com",
    messagingSenderId: "926330616494",
    appId: "1:926330616494:web:1195cc0f296c4c9718cb3f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
