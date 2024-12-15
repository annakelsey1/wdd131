document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

document.addEventListener('DOMContentLoaded', function () {
    const trails = document.querySelectorAll('.trail');
    const filters = document.querySelectorAll('.filters a');
    
    function filterTrails(difficulty) {
        trails.forEach(trail => {
            const trailDifficulty = trail.querySelector('p').textContent.toLowerCase();
            if (difficulty === 'all' || trailDifficulty.includes(difficulty)) {
                trail.style.display = 'block';
            } else {
                trail.style.display = 'none';
            }
        });
    }

    filters.forEach(filter => {
        filter.addEventListener('click', function (e) {
            e.preventDefault();
            const difficulty = filter.getAttribute('href').substring(1);
            filterTrails(difficulty);
        });
    });

    filterTrails('all');
});
