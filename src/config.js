// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function config() {
    const firebaseConfig = {
        apiKey: "AIzaSyCX8c9XEnUbBaee4GsvyqkLrFm7kzf2XCk",
        authDomain: "image-uploader-202202.firebaseapp.com",
        projectId: "image-uploader-202202",
        storageBucket: "image-uploader-202202.appspot.com",
        messagingSenderId: "365805087202",
        appId: "1:365805087202:web:16963521bc32bdc399b1bb",
        measurementId: "G-396LST67KQ",
        storageBucket: 'gs://image-uploader-202202.appspot.com'
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);

}
// export default config;
