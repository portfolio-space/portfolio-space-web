let names = document.getElementById("name")
let email = document.getElementById("email")
let profession = document.getElementById("profession")
let description = document.getElementById("description")
let submitBtn = document.getElementById("submit")
let addSkill = document.getElementById("addskill")
let skills = document.getElementById("skills")

addSkill.addEventListener("click", addSkills)

function addSkills() {
    skills.innerHTML += `<input type="text" id="name" class="my-3 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5" placeholder="John Doe" required>`
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
    }
    const encodedData = JSON.stringify(data)

    window.location.href = "/templates/design-1/index.html?data=" + encodedData
}

document.getElementById("image").addEventListener("change", function (event) {
    console.log(event.target.value)
})
