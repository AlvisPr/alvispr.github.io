// Loading screen handler
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.display = 'none';
        document.querySelector('.content').classList.add('visible');
        // Start typewriter effect after content is visible
        const typewriterElement = document.querySelector('.typewriter');
        if (typewriterElement) {
            const text = 'Junior Web Developer';
            let index = 0;
            typewriterElement.textContent = '';
            
            function typeText() {
                if (index < text.length) {
                    typewriterElement.textContent += text[index];
                    index++;
                    if (index < text.length) {
                        setTimeout(typeText, 150);
                    }
                }
            }
            
            typeText();
        }
    }, 1000);
});

// Intersection Observer for section animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-viewport');
        } else {
            entry.target.classList.remove('in-viewport');
        }
        // Removed the unobserve call to allow re-triggering animations
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.about-section-content, .skill-card, .project-card, .contact-method').forEach(card => {
    observer.observe(card);
});

// Start observing all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));
});

let projects = [{
    name: 'Real Time Bus Tracker',
    photo: 'https://raw.githubusercontent.com/AlvisPr/Real-Time-Bus-Tracker/main/Screenshoots/Screenshot.png',
    link: 'https://github.com/AlvisPr/Real-Time-Bus-Tracker',
    about: 'Interactive map tracks bus movement between MIT and Harvard stops.',
    live: ''
}, 
{
    name: 'Eye Exercise',
    photo: 'https://raw.githubusercontent.com/AlvisPr/Eye-Movement-Exercise/main/Screenshot/eyes.png',
    link: 'https://github.com/AlvisPr/Eye-Exercise',
    about: 'Dynamic eyes follow cursor movement across the webpage screen.',
    live: 'https://eyemovement.netlify.app/'
},
{
    name: 'PacMen Exercise',
    photo: 'https://raw.githubusercontent.com/AlvisPr/PacMen-Exercise/main/Screenshots/PacMen.png',
    link: 'https://github.com/AlvisPr/PacMen-Exercise',
    about: 'Create and animate PacMan characters bouncing around the screen.',
    live: 'https://pacmen.netlify.app/'
},
{
    name: 'Little Lemon Restaurant',
    photo: './Photos/littlelemon.jpeg',
    link: 'https://github.com/AlvisPr/little-lemon-capstone',
    about: 'Mediterranean restaurant website with online booking and menu system.',
    live: "https://littlelemonfreshfood.netlify.app/"
}, 
{
    name: 'Full Stack Banking App',
    photo: 'https://raw.githubusercontent.com/AlvisPr/FrontEndBankingApp_MIT/refs/heads/master/readme%20assets/HomePage.png',
    link: 'https://github.com/AlvisPr/FrontEndBankingApp_MIT',
    about: 'Secure banking application for deposits, withdrawals, and money transfers.',
    live: 'https://www.alvisprieditisfullstackbankingapp.online/'
}];

// Function to get technologies for each project
function getProjectTechnologies(projectName) {
    const techStack = {
        'Real Time Bus Tracker': ['JavaScript', 'Mapbox API', 'HTML', 'CSS'],
        'Eye Exercise': ['JavaScript', 'HTML', 'CSS'],
        'PacMen Exercise': ['JavaScript', 'HTML', 'CSS'],
        'Little Lemon Restaurant': ['React', 'Context API', 'JavaScript', 'CSS'],
        'Full Stack Banking App': ['React', 'Context API', 'Node.js', 'Express.js', 'MongoDB', 'JWT']
    };
    return techStack[projectName] || ['HTML', 'CSS', 'JavaScript'];
}

// Function to render projects
function renderProjects() {
    const projectsGrid = document.querySelector('#projects .projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    projects.forEach((project, index) => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card';

        // Add HTML content first
        projectCard.innerHTML = `
            <div class="project-image">
                ${project.photo ? 
                    `<img src="${project.photo}" alt="${project.name}" loading="lazy">` : 
                    `<div class="placeholder-image">
                        <i class="fas fa-laptop-code"></i>
                    </div>`
                }
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.live ? 
                            `<a href="${project.live}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View Live Demo">
                                <i class="fas fa-external-link-alt"></i>
                            </a>` : ''
                        }
                        <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View Source Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.about}</p>
                <div class="project-tech">
                    ${getProjectTechnologies(project.name)
                        .map(tech => `<span class="tech-tag">${tech}</span>`)
                        .join('')}
                </div>
            </div>`;

        // Add to DOM
        projectsGrid.appendChild(projectCard);

        // Trigger animation after a small delay
        setTimeout(() => {
            projectCard.classList.add('animate');
        }, 50); // Small delay to ensure DOM is ready
    });

    // Re-observe new cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

// Event listener for navigation
document.querySelectorAll('a[href="#projects"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        renderProjects();
    });
});

let parentElement = document.querySelector('.display__section'); 

let elementFactory = () => {
    parentElement.style.backgroundColor = "transparent";
    parentElement.style.backgroundImage = "none";
    parentElement.className = "projects-grid";
    parentElement.style.padding = "50px";
    parentElement.innerHTML = ''; // Clear existing content

    projects.forEach((element, index) => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
        <article class="project-card">
            <div class="project-image">
                ${element.photo ? 
                    `<img src="${element.photo}" alt="${element.name}" loading="lazy">` : 
                    `<div class="placeholder-image">
                        <i class="fas fa-laptop-code"></i>
                    </div>`
                }
                <div class="project-overlay">
                    <div class="project-links">
                        ${element.live ? 
                            `<a href="${element.live}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View Live Demo">
                                <i class="fas fa-external-link-alt"></i>
                            </a>` : ''
                        }
                        <a href="${element.link}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View Source Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${element.name}</h3>
                <p class="project-description">${element.about}</p>
                <div class="project-tech">
                    ${getProjectTechnologies(element.name)
                        .map(tech => `<span class="tech-tag">${tech}</span>`)
                        .join('')}
                </div>
            </div>
        </article>`;
        
        parentElement.appendChild(projectCard);
        
        // Trigger animation after a small delay
        setTimeout(() => {
            projectCard.classList.add('animate');
        }, 50 + (index * 100)); // Stagger the animations
    });
};

let projectsTab = document.getElementById('projects__tab');
let introductionContent = document.querySelector('.introduction__content');
let navigation = document.querySelector('.navigation');

projectsTab.addEventListener('click', () => {
    introductionContent.style.display = 'none';
    navigation.style.display = 'none';
    elementFactory();
});

let aboutSection = document.querySelector('.about__section');

function createBackButton() {
    let backToStart = document.createElement('button'); 
    backToStart.innerHTML = '<i class="fas fa-arrow-left" style="font-size: 16px;"></i>';
    backToStart.id = "back__to__start";
    backToStart.className = "back__to__start__button"; 
    aboutSection.appendChild(backToStart);

    backToStart.addEventListener('click', () => {
        location.reload(); 
    });
}

projectsTab.addEventListener('click', () => {
    introductionContent.style.display = 'none';
    navigation.style.display = 'none';
    elementFactory();

    aboutSection.style.justifyContent = "center";
    aboutSection.style.position = "relative";
    aboutSection.style.gap = "0px";
    createBackButton();
});

// Bubble Background Animation
function createBubble() {
    const bubbleContainer = document.querySelector('.bubble-container');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const size = Math.random() * 60 + 20; // Random size between 20px and 80px
    const startPosition = Math.random() * 100; // Random starting position
    
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${startPosition}vw`;
    bubble.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random duration between 3-5s
    
    bubbleContainer.appendChild(bubble);
    
    // Remove bubble after animation ends
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Create bubbles at regular intervals
setInterval(createBubble, 300);

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('myModal');
    const video = document.getElementById('video');
    const closeBtn = document.querySelector('.close');
    const youtubeBtn = document.querySelector('.youtube-btn');
    const VIDEO_URL = "https://www.youtube.com/embed/_47DFMJPiP0?si=H6-niX23dki5a3oZ";

    function createModalBubbles() {
        const modalBubbleContainer = modal.querySelector('.bubble-container');
        if (!modalBubbleContainer) {
            const bubbleContainer = document.createElement('div');
            bubbleContainer.className = 'bubble-container';
            modal.insertBefore(bubbleContainer, modal.firstChild);
        }
        createBubble(); // Create initial bubbles
    }

    function openModal() {
        modal.style.display = "flex";
        video.src = VIDEO_URL;
        createModalBubbles();
        // Start creating bubbles at intervals when modal is open
        modal.setAttribute('data-bubble-interval', setInterval(createBubble, 300));
    }

    function closeModal() {
        modal.style.display = "none";
        stopVideo();
        // Clear bubble interval when modal is closed
        clearInterval(Number(modal.getAttribute('data-bubble-interval')));
        // Remove all bubbles from modal
        const modalBubbleContainer = modal.querySelector('.bubble-container');
        if (modalBubbleContainer) {
            modalBubbleContainer.innerHTML = '';
        }
    }

    function stopVideo() {
        video.src = "";
        video.src = VIDEO_URL;
    }

    // Add click handler to YouTube button
    youtubeBtn.addEventListener('click', openModal);

    // Close button handler
    closeBtn.addEventListener('click', closeModal);

    // Click outside modal to close
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Handle escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Initialize modal functionality after DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeModal);

// Typewriter Code
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.typewriter');
    let initialText = 'Junior Web Developer';
    let currentText = initialText;
    let index = 0;
    let timeoutId = null;
    let direction = 1;
    let eraseOnMouseLeave = false;

    if (textElement) {
        textElement.textContent = '';
        typeWriter();
    
        textElement.addEventListener('mouseover', () => {
            if (currentText === initialText) {
                currentText = 'Full Stack Developer';
                direction = -1;
                typeWriter();
            }
        });
    
        textElement.addEventListener('mouseleave', () => {
            eraseOnMouseLeave = true;
            direction = -1;
            typeWriter();
        });
    }

    function typeWriter() {
        clearTimeout(timeoutId);
    
        const getRandomDelay = () => {
            return Math.random() * 100 + 50; // Random delay between 50-150ms
        };
    
        if (direction === 1) {
            if (index < currentText.length) {
                textElement.innerHTML += currentText.charAt(index);
                index++;
                timeoutId = setTimeout(typeWriter, getRandomDelay());
            } else {
                direction = 0;
                timeoutId = setTimeout(typeWriter, 2000); // Pause at the end
            }
        } else if (direction === -1 && eraseOnMouseLeave) {
            if (index >= 0) {
                textElement.innerHTML = currentText.substring(0, index);
                index--;
                timeoutId = setTimeout(typeWriter, getRandomDelay() / 2);
            } else {
                direction = 1;
                if (currentText !== initialText) {
                    currentText = initialText;
                    index = 0;
                    timeoutId = setTimeout(typeWriter, 1000);
                }
            }
        }
    }

    typeWriter();



    // Function to handle icon hover events
    function handleIconHover(event) {
        const newText = event.target.dataset.text || '';
        if (newText !== currentText) {
            index = 0;
            direction = 1;
            currentText = newText;
            textElement.innerText = '';
            typeWriter();
        }
    }

    // Add event listeners for hovering over icons
    document.querySelectorAll('.skills').forEach(icon => {
        icon.addEventListener('mouseenter', handleIconHover);
        icon.addEventListener('mouseleave', () => {
            document.querySelector('.tooltip')?.remove();
        });
    });

    // Modal functionality remains unchanged
    // btn.onclick = function() {
    //     modal.style.display = "block";
    // }

    // span.onclick = function() {
    //     modal.style.display = "none";
    //     stopVideo();
    // }

    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //         stopVideo();
    //     }
    // }
});

// Add active class when Display section is in view
document.addEventListener("DOMContentLoaded", function() {
    const displaySection = document.querySelector(".display__section");
    const  aboutSection = document.querySelector(".about__section");
    displaySection.classList.add("active");
    aboutSection.classList.add("active");
});

// JavaScript to check if the content overflows and expand the container
document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector(".text");
    const animatedText = document.getElementById("animated-text");

    // Check if content overflows vertically
    if (animatedText.scrollHeight > animatedText.clientHeight) {
        textContainer.classList.add("expand");
    }
});

// Contact card flip functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactCard = document.querySelector('.contact-card');
    const flipButtons = document.querySelectorAll('.contact-flip-btn');

    flipButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            contactCard.classList.toggle('flipped');
        });
    });
});

console.log('Script loaded');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initializeModal();
    typeWriter();

    // Add click handler for logo
    document.querySelector('.logo-link').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function handleScrollAnimations() {
    const elements = document.querySelectorAll('.about-section-content, .skill-card, .project-card, .contact-method');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    elements.forEach(element => observer.observe(element));
}

// Initialize scroll animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
});