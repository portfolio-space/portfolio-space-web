const portfolioLink = localStorage.getItem("portfolio")
const iframe = document.getElementById("portfolio")
const previewBtn = document.getElementById("previewBtn")

let previousProject = localStorage.getItem("portfolio")

if (!previousProject) {
    location.href = "../dashboard/index.html"
}

document.addEventListener("DOMContentLoaded", () => {
    iframe.src = portfolioLink
    previewBtn.href = portfolioLink
})

document.getElementById("downloadBtn").addEventListener("click", function () {
    if (iframe.contentDocument) {
        const iframeContent = iframe.contentDocument.documentElement.outerHTML

        const blob = new Blob([iframeContent], { type: "text/html" })

        const downloadLink = document.createElement("a")
        downloadLink.href = URL.createObjectURL(blob)
        downloadLink.download = "project-from-portfolio-space.html"
        downloadLink.style.display = "none"

        document.body.appendChild(downloadLink)
        downloadLink.click()

        document.body.removeChild(downloadLink)
    } else {
        alert("Iframe content is not available.")
    }
})
