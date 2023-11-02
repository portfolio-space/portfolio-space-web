let createPortfolio = document.getElementById("create-portfolio")

createPortfolio.addEventListener("click", () => {
    window.location.href = "../../pages/editor/index.html"
})

let previousProject = localStorage.getItem("portfolio")

let previousProjectElem = document.getElementById("previous-portfolio")

if (previousProject) {
    previousProjectElem.classList.add("flex")
    previousProjectElem.classList.remove("hidden")
}
