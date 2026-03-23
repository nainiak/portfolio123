// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {
            el.classList.add('active');
            
            // If it's a category with skill bars, animate them
            const bars = el.querySelectorAll('.skill-progress');
            if (bars.length > 0) {
                bars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-progress');
                });
            }
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Typing Animation
const typingText = document.getElementById('typing-text');
const words = ["Aspiring Software Developer", "Cybersecurity Enthusiast", "Full Stack Developer", "Ethical Hacker"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const type = () => {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
};

window.addEventListener('load', () => {
    revealOnScroll();
    type();
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Navbar offset
                behavior: 'smooth'
            });
        }
    });
});

// Typing effect simulation or simple console log
console.log("Portfolio Loaded: Akhil Yadav - Ready to build secure solutions.");
