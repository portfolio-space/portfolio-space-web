let openBtn = document.getElementById("open-menu")
let closeBtn = document.getElementById("close-menu")

let mobileMenu = document.getElementById("mobile-menu")

openBtn.addEventListener("click", (e) => {
    mobileMenu.classList.remove("hidden")
})

closeBtn.addEventListener("click", (e) => {
    mobileMenu.classList.add("hidden")
})

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"

const provider = new GoogleAuthProvider()

const loginBtns = document.querySelectorAll(".login-btn")

loginBtns.forEach((element) => {
    element.addEventListener("click", () => {
        loginWithGoogle()
    })
})

function loginWithGoogle() {
    const auth = getAuth()
    signInWithPopup(auth, provider)
        .then((result) => {
            // Check if the result is not null or undefined.
            if (!result) {
                return
            }

            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user

            // Store the user and token in local storage.
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)

            window.location.href = "pages/dashboard/index.html"
        })
        .catch((error) => {
            // Log the error details to the console.
            console.log(error.code, error.message, error.customData.email)

            // Display a user-friendly error message to the user.
            const errorMessage = error.message
            if (
                errorMessage === "auth/account-exists-with-different-credential"
            ) {
                alert(
                    "Please sign in with the email address that you used to create your account.",
                )
            } else {
                alert(
                    "An error occurred while signing in. Please try again later.",
                )
            }
        })
}

const user = JSON.parse(localStorage.getItem("user"))

if (user) {
    window.location.href = "pages/dashboard/index.html"
}
