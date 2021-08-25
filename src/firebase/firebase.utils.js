import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config={
    
        apiKey: "AIzaSyCXOM6V6vCKME0hN9H8Zw8bET639mDTC7Y",
        authDomain: "crwn-db-3b256.firebaseapp.com",
        projectId: "crwn-db-3b256",
        storageBucket: "crwn-db-3b256.appspot.com",
        messagingSenderId: "890396415293",
        appId: "1:890396415293:web:c8a2c3c24be16a1f7d6154",
        measurementId: "G-PG448QLDJ3"
      
};

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;