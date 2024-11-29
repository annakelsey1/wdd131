document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("main img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
        img.addEventListener("load", () => {
            img.style.opacity = "1";
        });
    });
    console.log("Lazy loading and fade-in animation applied to all images");
});
