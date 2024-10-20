const toggleMenu = document.getElementById('Togglebtn');
toggleMenu.addEventListener('click', () => {
  const toggleMenu = document.getElementById('navigation');
  toggleMenu.classList.toggle('container');
});
const CloseMenu = document.getElementById('Closebtn');
CloseMenu.addEventListener('click', () => {
  const CloseMenu = document.getElementById('navigation');
  CloseMenu.classList.remove('container');
});
const Navitems = document.querySelectorAll('.Navitem');
Navitems.forEach((Navitem) => {
  Navitem.addEventListener('click', () => {
    const navigation = document.getElementById('navigation');
    navigation.classList.remove('container');
  });
});

const toggleLanguages = document.querySelector('#toggle_languages');
const showLanguages = document.querySelector('#show_languages');
const toggleLanguagesImg = document.querySelector('#toggle_languages');
toggleLanguages.addEventListener('click', () => {
  showLanguages.classList.toggle('visible');
  toggleLanguagesImg.classList.toggle('arrow-down');
});

const toggleTools = document.querySelector('#toggle_tools');
const showTools = document.querySelector('#show_tools');
const toggleToolsImg = document.querySelector('#toggle_tools');
toggleTools.addEventListener('click', () => {
  showTools.classList.toggle('visible');
  toggleToolsImg.classList.toggle('arrow-down');
});

const toggleSkills = document.querySelector('#toggle_skills');
const showSkills = document.querySelector('#show_skills');
const toggleSkillsImg = document.querySelector('#toggle_skills');
toggleSkills.addEventListener('click', () => {
  showSkills.classList.toggle('visible');
  toggleSkillsImg.classList.toggle('arrow-down');
});


//const toggleButton = document.querySelector('#toggle_down');
// const targetElement = document.querySelector('#show');
// toggleButton.addEventListener('click', () => {
//targetElement.classList.toggle('visible');
//});

// JS Pop Functionality<---->(JS Objects)
const Projects = [{
  img: 'Images/1.png',
  title: 'Zufta Tours & Travels',
  skill: ['Travel', 'Full-Stack Dev', '2023'],
  para: 'Zufta Travel and Tours is the Largest and most reliable tourism company in Pakistan with lots of satisfied clients and we have arranged almost over 500 tours successfully..',
  parapop: 'Zufta Travel and Tours is the Largest and most reliable tourism company in Pakistan with lots of satisfied clients and we have arranged almost over 500 tours successfully. We offer tour to Hunza Valley, Naltar Valley Swat, Naran  Kaghan, Khunjrab Pass, Fairy Meadows, and many more incredible places around Pakistan. We arrange Family tours, Co-oporate tours, Group tours and Honeymoon tours for our valuable clients. With large numbers of fans, we became the largest tourism company in Pakistan. We also arrange tours for foreigners who came to Pakistan and Explore nature’s beauty at it’s best. So, pack your bags and visit your dream places in Pakistan.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  source: 'https://github.com/MasumaJaffery/Module-Capstone--1',
  livelink: 'https://masumajaffery.github.io/Zufta-Tours-Travels/',
},
{
  img: 'Images/2.png',
  title: 'Todays Weather',
  skill: ['Weather', 'Front End Dev', '2023'],
  para: 'The Weather App is based on Iraq Weather Forecast. Fetching Data from open source weather Api and renders on web app.',
  parapop: 'The Weather App is based on Iraq Weather Forecast. Fetching Data from open source weather Api and renders on web app.',
  tech: ['React','Redux','API'],
  source: 'https://github.com/MasumaJaffery/weather-app',
  livelink: 'https://masumajaffery.github.io/weather-app/',
},
{
img: 'Images/3a.png',
title: 'Splendor Homes',
skill: ['USA', 'Vite', '2024'],
para: 'Splendor Homes LLC is a real estate platform developed using React, offering a modern and user-friendly interface for exploring properties, managing listings, and streamlining real estate transactions.',
parapop: 'Splendor Homes LLC is a React-based real estate platform designed to provide a seamless experience for property exploration, listings management, and facilitating real estate transactions with ease.',
tech: ['React', 'TailwindCSS', 'Vite'],
source: 'https://github.com/MasumaJaffery/',
livelink: 'https://splendorhomesllc.com/',
},
{
  img: 'Images/4.png',
  title: 'Code Courses',
  skill: ['Level Up', 'Front End Dev', '2022'],
  para: 'Embark on a coding journey with our code courses! Learn the fundamentals of web development as you craft stunning, responsive websites using these foundational languages.',
  parapop: 'Embark on a coding journey with our code courses! Learn the fundamentals of web development as you craft stunning, responsive websites using these foundational languages. Dive into hands-on projects and master the art of designing captivating web experiences',
  tech: ['HTML5', 'CSS3', 'JavaScript'],
  source: 'https://github.com/MasumaJaffery/StaticSite',
  livelink: 'https://masumajaffery.github.io/StaticSite/',
},
{
  img: 'Images/5.png',
  title: 'Space Travelers Hub',
  skill: ['Microverse', 'Front End Dev', '2023'],
  para: 'Space Travelers Hub displays a list of Rockets and Space Missions and allows you to book rockets and join selected space missions.',
  parapop: 'Space Travelers Hub displays a list of Rockets and Space Missions and allows you to book rockets and join selected space missions.This is a React and Redux website that displays a list of Rockets and Space Missions and allows you to book rockets and join selected space missions.',
  tech: ['React', 'Redux', 'Bootstrap'],
  source: 'https://github.com/MasumaJaffery/space-travelers-hub',
  livelink: 'https://frolicking-cobbler-f01e96.netlify.app/',
},
{
  img: 'Images/6.png',
  title: 'Brunswick Builders',
  skill: ['React', 'Front End Dev', '2024'],
  para: 'Brunswick Builders, LLC is a construction management and project development firm whose owners and members have an over 60 years of combined experience committed to superior quality services to its clients',
  parapop: 'Brunswick Builders, LLC is a construction management and project development firm whose owners and members have an over 60 years of combined experience committed to superior quality services to its clients',
  tech: ['React', 'Redux', 'TailwindCSS'],
  source: 'https://github.com/MasumaJaffery/',
  livelink: 'https://www.brunswickbuildersllc.com/',
}
];

// Use this Objects in Function Below
const ProjectsCard = document.getElementById('work');
function show(index) {
  ProjectsCard.innerHTML
  += `<div class="work-card"> 
  <div class="work-img">
      <img class="img1" src="${Projects[index].img}">
  </div>
  <div class="work-detials">
      <h2>${Projects[index].title}</h2>
      <div class="align">
          <ul>
              <span>${Projects[index].skill[0]}</span>
              <li>${Projects[index].skill[1]}</li>
              <li>${Projects[index].skill[2]}</li>
          </ul>
      </div>
      <p>${Projects[index].para}</p>
      <div class="tags">
          <ul class="hash">
              <li class="HTML">${Projects[index].tech[0]}</li>
              <li class="CSS">${Projects[index].tech[1]}</li>
              <li class="JavaScript">${Projects[index].tech[2]}</li>
          </ul>
      </div>
      <div class="submit">
          <button type = "button" class = "popup-button" id = "popupButton">See Project</button>
      </div>
  </div>
</div>`;
}
// For Loop to Deal with Array of Objects;
for (let i = 0; i < Projects.length; i += 1) {
  show(i);
}
// Pop Up Configurations;
const PopUpWindow = document.getElementById('PopupDetials');
function PopUp(index) {
  const project = Projects[index];
  PopUpWindow.innerHTML = `
  <div class = "Modal-bg">
  <div class="Modal">
      <div class="Modal-Title">
        <h2 class="heading">${project.title}</h2>
        <button type="button" class="close-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" class="close-popup" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="close-popup" fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#67798E"/>
          </svg>
        </button>
      </div>
      <div class="align">
        <ul>
          <span>${project.skill[0]}</span>
          <li>${project.skill[1]}</li>
          <li>${project.skill[2]}</li>
        </ul>
      </div>
      <div class="work-img">
        <img class="img1" src="${project.img}">
      </div>
      <div class = 'desktop-pop'>
      <p>${project.parapop}</p>
      <div class = "deskpop">
      <div class="tags">
        <ul class="hash">
          <li class="HTML">${project.tech[0]}</li>
          <li class="CSS">${project.tech[1]}</li>
          <li class="JavaScript">${project.tech[2]}</li>
        </ul>
      </div>
      <hr>
      <div class="modal-buttons">
      <a href="${project.livelink}"><button type="button" class="see-live">See Live<img src="Images/livelink.svg"></button></a>
      <a href="${project.source}"><button type="button" class="see-source">See Source<img src="Images/blue.png"></button></a>
      </div>
      </div>
    </div>
    </div>
    </div>`;
  // Add event listener to close button
  const closeButton = PopUpWindow.querySelector('.close-btn');
  closeButton.addEventListener('click', () => {
    PopUpWindow.innerHTML = ''; // Clear the popup window content
  });
}

// Get all the buttons that trigger the popups
const popupButtons = document.querySelectorAll('.popup-button');

// Add click event listeners to the popup buttons
popupButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    PopUp(index);
  });
});

// Form Validation by JS
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    error.innerHTML = 'Email must be in Lower Case, The form is not sent .';
  }
});

// Form Data Preservation in Browser
const name1 = document.getElementById('name');
const email1 = document.getElementById('email');
const textarea = document.getElementById('textarea');
function setData() {
  const userData = {
    Name: name1.value,
    Email: email1.value,
    TextArea: textarea.value,
  };

  localStorage.setItem('userData', JSON.stringify(userData));
}

form.addEventListener('input', setData);

function getData() {
  const getInfo = JSON.parse(localStorage.getItem('userData'));
  name1.value = getInfo.Name;
  email1.value = getInfo.Email;
  textarea.value = getInfo.TextArea;
}

getData();

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("resumeBtn").addEventListener("click", function() {
    window.location.href = "https://docs.google.com/document/d/1WLvNzezDX5oJRl8l1gqf_gZzK31S3z4WEVk-fUEin9s/edit?usp=sharing";
  });
});
