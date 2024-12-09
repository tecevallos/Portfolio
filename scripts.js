// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
document.querySelectorAll('.project-detail').forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const modal = document.getElementById(`modal-${projectId}`);
        modal.classList.remove('hidden');
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.classList.add('hidden');
    });
});

window.addEventListener('click', function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target == modal) {
            modal.classList.add('hidden');
        }
    });
});



// Show More functionality
document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', function() {
        const ul = this.previousElementSibling;
        ul.querySelectorAll('.more-content').forEach(li => li.classList.toggle('hidden'));
        this.textContent = this.textContent === 'Show More' ? 'Show Less' : 'Show More';
    });
});
