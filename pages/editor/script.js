// input field for user portfolio
let names = document.getElementById("name")
let inputEmail = document.getElementById("input-email")
let profession = document.getElementById("profession")
let description = document.getElementById("description")
let contactDesc = document.getElementById("contact-desc")
let instagramLink = document.getElementById("instgram-link")

// file upload elements
const profileImgUpload = document.getElementById("profile-image")
const projectThumbnail = document.getElementById("project-thumbnail")

// user action
let addProject = document.getElementById("addproject")
let addService = document.getElementById("addservice")

let submitBtn = document.getElementById("submit")

// event handlers
addProject.addEventListener("click", addProjects)
addService.addEventListener("click", addServices)

submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    createPortfolio()
})

profileImgUpload.addEventListener("change", (event) => {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()

        reader.onload = (e) => {
            localStorage.setItem("encodedProfileImage", e.target.result)
            console.log("Profile Image saved")
        }

        reader.readAsDataURL(file)
    }
})

function createPortfolio() {
    let data = {
        name: names.value,
        email: inputEmail.value,
        profession: profession.value,
        description: description.value,
        contactDesc: contactDesc.value,
        instagramLink: instagramLink.value, 
    }

    console.log(data.projects)

    const encodedURLData = JSON.stringify(data)

    localStorage.setItem(`projects`, JSON.stringify(projects))
    localStorage.setItem(`services`, JSON.stringify(services))
    localStorage.setItem(
        "portfolio",
        `/templates/design-1/index.html?data=${encodedURLData}`,
    )

    window.location.href = "/pages/preview/index.html"
}

const projects = []
let projectCount = 1

let encodeThumbnailImage

projectThumbnail.addEventListener("change", (event) => {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = (e) => (encodeThumbnailImage = e.target.result)
    }
})

function addProjects() {
    const projectName = document.getElementById("project-name")
    const projectDesc = document.getElementById("project-desc")
    const projectLink = document.getElementById("project-link")
    const projectIdElem = document.getElementById("project-id")

    if (
        !validateInput(projectName, "Please enter a project name.") ||
        !validateInput(projectDesc, "Please enter a project description.") ||
        !validateInput(projectLink, "Please enter a project link.")
    ) {
        return
    }

    if (projectThumbnail.files.length !== 0) {
        projects.push([
            projectName.value,
            projectDesc.value,
            projectLink.value,
            encodeThumbnailImage,
        ])

        projectIdElem.innerText = ++projectCount

        projectName.value = ""
        projectDesc.value = ""
        projectLink.value = ""
        projectThumbnail.value = ""
    } else {
        alert(`Please upload an image for project ${projectCount}`)
    }
}

let services = []
let servicesCount = 1

function addServices() {
    const serviceName = document.getElementById("service-name")
    const serviceDesc = document.getElementById("service-desc")
    const serviceIdElem = document.getElementById("service-id")

    if (
        !validateInput(serviceName, "Please enter a service name.") ||
        !validateInput(serviceDesc, "Please enter a service description.")
    ) {
        return
    }

    services.push([serviceName.value, serviceDesc.value])
    serviceIdElem.innerText = ++servicesCount

    serviceName.value = ""
    serviceDesc.value = ""
}

function validateInput(element, message) {
    if (!element.value) {
        alert(message)
        return false
    }
    return true
}
