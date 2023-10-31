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
        projects: [],
    }
    const encodedData = JSON.stringify(data)

    window.location.href = "/templates/design-1/index.html?data=" + encodedData
}

const profileImgUpload = document.getElementById("profile-image")

profileImgUpload.addEventListener("change", function (event) {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()

        reader.onload = function (e) {
            const encodedImage = e.target.result
            localStorage.setItem("encodedImage", encodedImage)
            console.log("Profile Image saved")
        }

        reader.readAsDataURL(file)
    }
})

let projectCount = 1

const project = []
let encodeThumbnailImage

const projectThumbnail = document.getElementById("project-thumbnail")

projectThumbnail.addEventListener("change", function (event) {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = function (e) {
            encodeThumbnailImage = e.target.result
        }
    }
})

function addProjects() {
    // Get the project details from the input fields.
    let projectName = document.getElementById("project-name")
    let projectDesc = document.getElementById("project-desc")
    let projectLink = document.getElementById("project-link")
    let projectIdElem = document.getElementById("project-id")

    // Validate the input fields.
    if (!projectName.value) {
        alert("Please enter a project name.")
        return
    }

    if (!projectDesc.value) {
        alert("Please enter a project description.")
        return
    }

    if (!projectLink.value) {
        alert("Please enter a project link.")
        return
    }

    if (projectThumbnail.files.length != 0) {
        project.push([
            projectName.value,
            projectDesc.value,
            projectLink.value,
            encodeThumbnailImage,
        ])
        projectCount += 1
        projectIdElem.innerText = projectCount

        localStorage.setItem(`project-${projectCount}`, JSON.stringify(project))

        projectName.value = ""
        projectDesc.value = ""
        projectLink.value = ""

        console.log(project)
        console.log(projectName.value)
    } else {
        alert(`Please upload image for the project ${projectCount}`)
    }
}
