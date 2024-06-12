let projects = [{
    name: 'Real Time Bus Tracker',
    photo: 'https://raw.githubusercontent.com/AlvisPr/Real-Time-Bus-Tracker/main/Screenshoots/Screenshot.png',
    link: 'https://github.com/AlvisPr/Real-Time-Bus-Tracker'
}, 
{
    name: 'Eye Movement Exercise',
    photo: 'https://raw.githubusercontent.com/AlvisPr/Eye-Movement-Exercise/main/Screenshot/eyes.png',
    link: 'https://github.com/AlvisPr/Eye-Movement-Exercise'
},
{
    name: 'PacMen Exercise',
    photo: 'https://raw.githubusercontent.com/AlvisPr/PacMen-Exercise/main/Screenshots/PacMen.png',
    link: 'https://github.com/AlvisPr/PacMen-Exercise'
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
    <div class="card" style="width: 16rem;">
        <img src="${element.photo}" class="card-img-top" alt="${element.name}">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <a href="${element.link}" class="btn btn-danger">Project Link</a>
        </div>
    </div>
`;
        parentElement.innerHTML += cardHTML;
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

// Modal JavaScript
var modal = document.getElementById("myModal");
var btn = document.getElementById("watch__video");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

function stopVideo() {
    var src = video.src;
    video.src = "";
    video.src = src;
    }

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    stopVideo();
}

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('animated-text');
    const initialText = textElement.innerText;
    textElement.innerText = '';

    let index = 0;
    let direction = 1; // 1 for writing, -1 for erasing
    let currentText = initialText;
    let timeoutId = null;

    function typeWriter() {
        clearTimeout(timeoutId); // Clear the previous timeout

        if (direction === 1) {
            if (index < currentText.length) {
                textElement.innerHTML += currentText.charAt(index);
                index++;
                timeoutId = setTimeout(typeWriter, ); // Adjust the speed here
            } else {
                timeoutId = setTimeout(typeWriter, 2000); // Delay before erasing
            }
        } else {
            if (index >= 0) {
                textElement.innerHTML = currentText.substring(0, index);
                index--;
                timeoutId = setTimeout(typeWriter, 0); // Adjust the speed here
            } else {
                direction = 1;
                if (currentText !== initialText) {
                    currentText = initialText;
                    index = 0;
                    timeoutId = setTimeout(typeWriter, 1000); // Delay before starting to write again
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
            direction = -1;
            typeWriter();
        });
    });

    // Modal functionality remains unchanged
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("watch__video");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});



