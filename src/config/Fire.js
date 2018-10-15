
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAO--uyC8V5-SaKQGDW4bxPQFK12APoYTA",
    authDomain: "fir-auth-tutorial-27173.firebaseapp.com",
    databaseURL: "https://fir-auth-tutorial-27173.firebaseio.com",
    projectId: "fir-auth-tutorial-27173",
    storageBucket: "fir-auth-tutorial-27173.appspot.com",
    messagingSenderId: "182472864097"
};
const fire = firebase.initializeApp(config);
export default fire;
