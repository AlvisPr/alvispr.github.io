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
        let container = document.createElement('div');
        container.className = "card"; 

        let imageDiv = document.createElement('div');
        imageDiv.className = "image__div"

        let imageContainer = document.createElement('div'); 
        imageContainer.className="image__container";

        let description = document.createElement('div');
        description.className="card__description";

        let image = document.createElement('img');
        image.className="card__image";
        image.src = element.photo;
        imageDiv.appendChild(image);

        let name = document.createElement('h1');
        name.innerHTML = element.name;
        description.appendChild(name);

        let link = document.createElement('a');
        link.href = element.link; 
        link.style.textDecoration = 'none';
        link.style.color="white";
        link.innerHTML = 'Project Link';
        
        let button = document.createElement('button'); 
        button.className="card__button"; 
        button.appendChild(link);
        description.appendChild(button);
        
        imageContainer.appendChild(imageDiv);
        container.appendChild(imageContainer);
        container.appendChild(description);

        parentElement.appendChild(container); 
        containers.push(container);
    });
}

let projectsTab = document.getElementById('projects__tab')
projectsTab.addEventListener('click', () => {
    let introductionContent = document.querySelector('.introduction__content');
    let navigation = document.querySelector('.navigation');

    introductionContent.style.display = 'none';
    navigation.style.display = 'none';

    elementFactory();
    let aboutSection = document.querySelector('.about__section');
    aboutSection.style.justifyContent = "space-between";
    aboutSection.style.gap="0px";
    let backToStart = document.createElement('button'); 
    backToStart.innerHTML = '<i class="fas fa-arrow-left style="font-size: 24px;"></i>';
    backToStart.id = "back__to__start"
    backToStart.className = "back__to__start__button"; 
    backToStart.style.width = "486px";
    backToStart.style.height="60px";
    aboutSection.appendChild(backToStart);

    let backButton = document.getElementById('back__to__start');
    backButton.addEventListener('click', () => {
        location.reload(); 
    })
})

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