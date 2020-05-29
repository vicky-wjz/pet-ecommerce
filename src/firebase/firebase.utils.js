import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAN3uA2eNU8qbWy3a_YLSKEYdq0hNcVkx8",
    authDomain: "petstore-db.firebaseapp.com",
    databaseURL: "https://petstore-db.firebaseio.com",
    projectId: "petstore-db",
    storageBucket: "petstore-db.appspot.com",
    messagingSenderId: "617917518537",
    appId: "1:617917518537:web:9d33eb83ee0eda7bfd7318",
    measurementId: "G-97EKQ79B9V"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();
      
      if(!snapShot.exists) {
         const { displayName, email} = userAuth;
         const createdAt = new Date();

         try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

         } catch (err) {
            console.log('error creating user', err)

         }
      }

      return userRef;
    }


  


  firebase.initializeApp(config);


 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

  // Google account authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;