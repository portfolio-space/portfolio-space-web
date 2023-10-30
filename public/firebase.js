import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js"

const firebaseConfig = {
    apiKey: "AIzaSyAK1xqkNd6oq2fsf9kON0SKNxslEiFicP0",
    authDomain: "portfolio-space-23ffb.firebaseapp.com",
    projectId: "portfolio-space-23ffb",
    storageBucket: "portfolio-space-23ffb.appspot.com",
    messagingSenderId: "505725869774",
    appId: "1:505725869774:web:d386da638b628a4881ba9f",
    measurementId: "G-ZS3MG4DKMS",
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
