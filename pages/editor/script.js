let names = document.getElementById("name")
let email = document.getElementById("email")
let profession = document.getElementById("profession")
let description = document.getElementById("description")
let submitBtn = document.getElementById("submit")
let addSkill = document.getElementById("addskill")
let addProject = document.getElementById("addproject")
let projects = document.getElementById("projects")
let skills = document.getElementById("skills")

addSkill.addEventListener("click", addSkills)

function addSkills() {
    skills.innerHTML += `<input type="text" class="my-3 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5"required>`
}

addProject.addEventListener("click", addProjects)

function addProjects () {
    projects.innerHTML += `<input
    type="text"
    class="my-3 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5"
    required />`
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault()
    send()
})

function send() {
    let data = {
        name: names.value,
        email: email.value,
        profession: profession.value,
        description: description.value,
        projects: []
    }
    const encodedData = JSON.stringify(data)

    window.location.href = "/templates/design-1/index.html?data=" + encodedData
}

const fileInput = document.getElementById("profile-image")

fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()

        reader.onload = function (e) {
            // Encode the file to a base64 string.
            const encodedImage = e.target.result

            // Save the encoded image to local storage.
            localStorage.setItem("encodedImage", encodedImage)

            console.log("Image saved")
        }

        reader.readAsDataURL(file)
    }
})


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


