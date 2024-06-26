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
}
];

let parentElement = document.querySelector('.display__section'); 

let containers = [];

let elementFactory = () => {
    parentElement.style.backgroundColor = "none";
    parentElement.style.backgroundImage = 'url("https://images7.alphacoders.com/133/1337527.png")';
    parentElement.style.backgroundSize = "cover";
    parentElement.className = "project__content";
    parentElement.style.padding = "50px";

    projects.forEach(element => {
        let cardHTML = `
    <div class="card" data-bs-toggle="tooltip" style="width: 16rem;" title="${element.about}">
        <img src="${element.photo}" class="card-img-top" alt="${element.name}">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <a href="${element.link}" class="btn btn-danger" target="_blank">Project Link</a>
            <a href="${element.live}" class="btn btn-success" target="_blank" id="previewButton" >Preview</a> 
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
    backToStart.innerHTML = '<i class="fas fa-arrow-left" style="font-size: 24px;"></i>';
    backToStart.id = "back__to__start";
    backToStart.className = "back__to__start__button"; 
    backToStart.style.position = "absolute";
    backToStart.style.width = "inherit";
    backToStart.style.bottom = "0px";
    backToStart.style.right = "0";
    backToStart.style.width = "10%";
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

