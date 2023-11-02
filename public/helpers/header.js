import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"

const user = JSON.parse(localStorage.getItem("user"))

if (user) {
    const email = user.email
    const username = user.displayName
    const photoURL = user.photoURL

    const [firstName] = username.split(" ")

    const headerNameElem = document.getElementById("header-name")
    headerNameElem.innerText = firstName

    const displayNameElem = document.getElementById("displayname")
    displayNameElem.innerText = username

    const emailAddressElem = document.getElementById("email")
    emailAddressElem.innerText = email

    const displayImgElem = document.getElementById("display-image")
    displayImgElem.src = photoURL
} else {
    localStorage.clear()
    location.href = "../../index.html"
}

const logoutBtn = document.getElementById("logout-btn")
logoutBtn.addEventListener("click", (e) => signOutFromGoogle())

function signOutFromGoogle() {
    const auth = getAuth()

    auth.signOut().then(() => {
        console.log("Signed out")
        localStorage.clear()
    })
}

const footerSection = `<footer class="border-t bg-white mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8"><div class="grid grid-cols-1 gap-4 lg:grid-cols-2"><div class="mx-auto max-w-sm lg:ml-0"><div class="flex gap-4"><a href="#" class="-m-1.5 p-1.5"><span class="sr-only">Portfolio Space</span><img class="h-8 w-auto" src="../../public/assets/logo.svg" alt=""></a><h1 class="font-bold text-2xl">Portfolio Space</h1></div><p class="mt-4 text-gray-500 lg:text-left lg:text-lg">Allowing tech or design professionals to craft personalized showcases in under 15 minutes.</p><div class="mt-6 flex gap-4 lg:justify-start"><a class="text-gray-700 transition hover:text-gray-700/75" href="https://github.com/portfolio-space/portfolio-space-web" target="_blank" rel="noreferrer"><span class="sr-only">GitHub</span><img class="h-6 w-6" src="../../public/assets/github-mark.svg" alt=""></a></div></div><div class="flex lg:text-left w-full max-w-sm m-auto lg:max-w-full"><div class="w-full"><strong class="font-medium text-gray-900">About</strong><ul class="mt-6 space-y-1"><li><a class="text-gray-700 transition hover:text-gray-700/75" href="/">About</a></li><li><a class="text-gray-700 transition hover:text-gray-700/75" href="/">Our Team</a></li></ul></div><div class="w-full"><strong class="font-medium text-gray-900">Support</strong><ul class="mt-6 space-y-1"><li><a class="text-gray-700 transition hover:text-gray-700/75" href="/">FAQs</a></li><li><a class="text-gray-700 transition hover:text-gray-700/75" href="/">Contact</a></li></ul></div></div></div><div class="my-4 border-gray-100 pt-6 gap-2 w-full mx-auto max-w-sm lg:flex-row lg:max-w-none grid grid-cols-1 lg:grid-cols-2"><p class="text-s/relaxed text-gray-500">Created by <a href="https://github.com/AlwinSunil" target="_blank" rel="noopener noreferrer" class="text-gray-700 underline transition hover:text-gray-700/75">Alwin</a>, <a href="https://github.com/Anam-Ashraf7" target="_blank" rel="noopener noreferrer" class="text-gray-700 underline transition hover:text-gray-700/75">Anam</a>, <a href="https://github.com/AlexCFrost" target="_blank" rel="noopener noreferrer" class="text-gray-700 underline transition hover:text-gray-700/75">Siva Ganesh</a>.</p><p class="text-s/relaxed text-gray-500">© Portfolio Space 2023. All rights reserved.</p></div></footer>`

const footerNode = document.createElement("footer")
footerNode.innerHTML = footerSection

document.body.appendChild(footerNode)
