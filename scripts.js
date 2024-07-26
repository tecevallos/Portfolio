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

// Typing effect for job titles
const titles = ["Software Engineer", "Video Editor", "Content Creator"];
let currentTitle = 0;
let charIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const newTitleDelay = 2000;
const titleElement = document.querySelector('.typing-effect');

function type() {
    if (charIndex < titles[currentTitle].length) {
        titleElement.textContent += titles[currentTitle].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTitleDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        titleElement.textContent = titles[currentTitle].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentTitle = (currentTitle + 1) % titles.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, newTitleDelay);
});

// Show More functionality
document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', function() {
        const ul = this.previousElementSibling;
        ul.querySelectorAll('.more-content').forEach(li => li.classList.toggle('hidden'));
        this.textContent = this.textContent === 'Show More' ? 'Show Less' : 'Show More';
    });
});
