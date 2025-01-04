let projects = [{
    name: 'Real Time Bus Tracker',
    photo: 'https://raw.githubusercontent.com/AlvisPr/Real-Time-Bus-Tracker/main/Screenshoots/Screenshot.png',
    link: 'https://github.com/AlvisPr/Real-Time-Bus-Tracker',
    about: `The Real-Time Bus Tracker is a web application that tracks the movement of a bus along its route.`,
    live: ``
}, 
{
    name: 'Eye Exercise',
    photo: 'https://raw.githubusercontent.com/AlvisPr/Eye-Movement-Exercise/main/Screenshot/eyes.png',
    link: 'https://github.com/AlvisPr/Eye-Exercise',
    about: `This project simulates the movement of eyes following the cursor on the screen. `,
    live: `https://eyemovement.netlify.app/`
},
{
    name: 'PacMen Exercise',
    photo: 'https://raw.githubusercontent.com/AlvisPr/PacMen-Exercise/main/Screenshots/PacMen.png',
    link: 'https://github.com/AlvisPr/PacMen-Exercise',
    about: `This project is a fun and interactive web application that creates PacMen at random positions on the screen. `,
    live: `https://pacmen.netlify.app/`
},
{
    name: 'Little Lemon Restaurant Capstone Project',
    photo: '',
    link: 'https://github.com/AlvisPr/little-lemon-capstone',
    about: `This project is my Capstone Project I did as a final assignmnet for Meta front end developer certificate. It is a restaurant website for a fictional restaurant called Little Lemon Mediterranean. `,
    live: `https://littlelemonmediterranean.netlify.app/`
}, 
{
    name: 'Full Stack Banking App Capstone Project',
    photo: 'https://raw.githubusercontent.com/AlvisPr/FrontEndBankingApp_MIT/refs/heads/master/readme%20assets/HomePage.png',
    link: 'https://github.com/AlvisPr/FrontEndBankingApp_MIT',
    about: `This a capstone project I did as a final assignment for MIT ProX 32 Week Full Stack Development Bootcampt program. It is a full stack banking application that allows users to create an account, deposit, withdraw, and transfer money. `,
    live: `https://www.alvisprieditisfullstackbankingapp.online/`
}, 

];

let parentElement = document.querySelector('.display__section'); 

let containers = [];

let elementFactory = () => {
    parentElement.style.backgroundColor = "transparent";
    parentElement.style.backgroundImage = "none";
    
    // Create bubble container if it doesn't exist
    let bubbleContainer = document.querySelector('.bubble-container');
    if (!bubbleContainer) {
        bubbleContainer = document.createElement('div');
        bubbleContainer.className = 'bubble-container';
        document.body.insertBefore(bubbleContainer, document.body.firstChild);
    }
    
    parentElement.className = "project__content";
    parentElement.style.padding = "50px";

    projects.forEach(element => {
        let cardHTML = `
        <div class="card" data-bs-toggle="tooltip" style="width: 16rem;" title="${element.about}">
            ${element.photo ? 
                `<img src="${element.photo}" class="card-img-top" alt="${element.name}">` : 
                `<div class="card-img-top d-flex align-items-center justify-content-center" 
                    style="height: 160px; width: 100%; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); object-fit: cover;">
                    <i class="fas fa-image" style="font-size: 3rem; color: #4a5568;"></i>
                 </div>`
            }
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <div class="btn-container">
                    <a href="${element.link}" class="btn btn-danger" target="_blank"><i class="fas fa-code"></i> Code</a>
                    <a href="${element.live}" class="btn btn-success" target="_blank" id="previewButton"><i class="fas fa-eye"></i> Demo</a>
                </div>
            </div>
        </div>
`;
        parentElement.innerHTML += cardHTML;

        if (!element.live) {
            const previewButton = parentElement.querySelector("#previewButton");
            if (previewButton) {
                previewButton.classList.add("disabled");
            }
        }
    });    

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('.bi-patch-question'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        tooltipTriggerEl.addEventListener('mouseenter', function () {
            var cardId = this.closest('.card').id;
            var cardElement = document.getElementById(cardId);
            cardElement.setAttribute('title', this.getAttribute('data-about'));
            new bootstrap.Tooltip(cardElement, {
                placement: 'bottom'
            });
        });

        tooltipTriggerEl.addEventListener('mouseleave', function () {
            var cardId = this.closest('.card').id;
            var cardElement = document.getElementById(cardId);
            cardElement.removeAttribute('title');
        });
    });
}

let projectsTab = document.getElementById('projects__tab');
let introductionContent = document.querySelector('.introduction__content');
let navigation = document.querySelector('.navigation');
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

//Video open/close
var modal = document.getElementById("myModal");
var btn = document.getElementById("watch__video");
var span = document.getElementsByClassName("close")[0];
var video = document.getElementById("video"); 

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
    stopVideo();
}

function stopVideo() {
    var src = video.src;
    video.src = "";
    video.src = src;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        stopVideo();
    }
}

//Typewriter Code
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('animated-text');
    const initialText = textElement.innerText;
    textElement.innerText = '';

    let index = 0;
    let direction = 1; 
    let currentText = initialText;
    let timeoutId = null;
    let eraseOnMouseLeave = false; 

    function typeWriter() {
        clearTimeout(timeoutId); 

        if (direction === 1) {
            if (index < currentText.length) {
                textElement.innerHTML += currentText.charAt(index);
                index++;
                timeoutId = setTimeout(typeWriter, 5); 
            } else {
                direction = 0; 
            }
        } else if (direction === -1 && eraseOnMouseLeave) {
            if (index >= 0) {
                textElement.innerHTML = currentText.substring(0, index);
                index--;
                timeoutId = setTimeout(typeWriter, 5); 
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
            // Start erasing immediately when mouse leaves the icon
            eraseOnMouseLeave = true;
            direction = -1;
            typeWriter();
        });
        icon.addEventListener('mouseover', () => {
            // Prevent erasing while hovering over the icon
            eraseOnMouseLeave = false;
        });
    });

    // Modal functionality remains unchanged
    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
        stopVideo();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            stopVideo();
        }
    }
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
