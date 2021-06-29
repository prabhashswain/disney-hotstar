import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0-4m5Uy0GvwZskW9CwFgKe0XHsmBO_Do",
    authDomain: "disneyplus-hotstar-7c199.firebaseapp.com",
    projectId: "disneyplus-hotstar-7c199",
    storageBucket: "disneyplus-hotstar-7c199.appspot.com",
    messagingSenderId: "915613259831",
    appId: "1:915613259831:web:b20442d99c8098d7e247b2"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;