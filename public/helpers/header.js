const user = JSON.parse(localStorage.getItem("user"))

if (!user.email) {
    localStorage.clear()
    window.location.href = "index.html"
}

if (user) {
    const email = user.email
    const username = user.displayName
    const photoURL = user.photoURL

    const [firstName] = username.split(" ")

    console.log(user)
    console.log(email, username, photoURL)

    const headerNameElem = document.getElementById("header-name")
    headerNameElem.innerText = firstName

    const displayNameElem = document.getElementById("displayname")
    displayNameElem.innerText = username

    const emailAddressElem = document.getElementById("email")
    emailAddressElem.innerText = email

    const displayImgElem = document.getElementById("display-image")
    displayImgElem.src = photoURL
}

const logoutBtn = document.getElementById("logout-btn")
logoutBtn.addEventListener("click", (e) => signOutFromGoogle())

import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"

function signOutFromGoogle() {
    const auth = getAuth()

    auth.signOut().then(() => {
        console.log("signed out")
        localStorage.clear()
        window.location.href = "/index.html"
    })
}
