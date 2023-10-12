let openBtn = document.getElementById("open-menu")
let closeBtn = document.getElementById("close-menu")

let mobileMenu = document.getElementById("mobile-menu")

openBtn.addEventListener("click", (e) => {
    console.log(e)
    mobileMenu.classList.remove("hidden")
})

closeBtn.addEventListener("click", (e) => {
    console.log(e)
    mobileMenu.classList.add("hidden")
})
