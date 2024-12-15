document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#FFEB3D';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
    });
});
