import firebase from "firebase/app";
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBkgzEbJliw8RLRxBEVo2Y6gQbMdOG0RLY",
    authDomain: "stockapi-222ec.firebaseapp.com",
    databaseURL: "https://stockapi-222ec-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "stockapi-222ec",
    storageBucket: "stockapi-222ec.appspot.com",
    messagingSenderId: "841809422985",
    appId: "1:841809422985:web:24976e58246a238d29f458"
    };

if(firebase.apps.length == 0) firebase.initializeApp(firebaseConfig);
export default firebase.database();