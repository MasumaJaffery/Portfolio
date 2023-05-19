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
// JS Pop Functionality<---->(JS Objects)
const Projects = [{
  img: 'Images/Snapshoot Portfolio-Desktop.png',
  title: 'Tonic',
  skill: ['CANOPY', 'Back End Dev', '2023'],
  para: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  parapop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essent',
  tech: ['HTML', 'CSS', 'JavaScript'],
  source: 'https://github.com/MasumaJaffery/Portfolio',
  livelink: 'https://masumajaffery.github.io/Portfolio/',
},
{
  img: 'Images/Snapshoot Portfolio-Desktop-2.png',
  title: 'Multi-Post Stories',
  skill: ['CANOPY', 'Back End Dev', '2023'],
  para: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  parapop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essent',
  tech: ['HTML', 'CSS', 'JavaScript'],
  source: 'https://github.com/MasumaJaffery/Portfolio',
  livelink: 'https://masumajaffery.github.io/Portfolio/',
},
{
  img: 'Images/Snapshoot Portfolio-Desktop-3.png',
  title: 'Tonic',
  skill: ['CANOPY', 'Back End Dev', '2023'],
  para: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  parapop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essent',
  tech: ['HTML', 'CSS', 'JavaScript'],
  source: 'https://github.com/MasumaJaffery/Portfolio',
  livelink: 'https://masumajaffery.github.io/Portfolio/',
},
{
  img: 'Images/Snapshoot Portfolio-Desktop-4.png',
  title: 'Multi-Post Stories',
  skill: ['CANOPY', 'Back End Dev', '2023'],
  para: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  parapop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essent',
  tech: ['HTML', 'CSS', 'JavaScript'],
  source: 'https://github.com/MasumaJaffery/Portfolio',
  livelink: 'https://masumajaffery.github.io/Portfolio/',
}];
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
      <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
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
//Form Data Preservation in Browser
/*
Short Summary:
Frist We get Elements by Id from Form Then we create a function getData() to get data from
it so i create object for data then i return this object, In the next step 
we create function LocalStorage to setItem(key, value) func in order to set item to Local Storage in order to 
convert object into string by JSON.stringly, alike,
window.LocalStorage.JSON.stringly('data-form',Object).  here data-form is arguement! and
window is used localStorage lives in the browser window enviroment and window is an object of the browser and 
it's like a chain of objects... that's the reason  we use dot.notation!
Then we create another function to get data by using getitem, if we got data we convert it into to object by JSON.parse to
convert it into object. In Last we create function to show data, if every value equal to given value so its function takes place!
*/
const name1 = document.getElementById('name');
const email1 = document.getElementById('email');
const textarea = document.getElementById('textarea');
function getData () {
  const Object = {
   name: name1.value,
   email: email1.value,
   textarea: textarea.value,
  };
  return Object;
}
function setDataLocalStorage(Object) {
  // here I convert the object to string because LocalStorage only store primitive type of data like strings, numbers, booleans
  const convertObject = JSON.stringify(Object);
  window.localStorage.setItem('data-form', convertObject);
  //setItem(key,value)
}

function getDataFromLocalStorage() {
  // first we check if the object 'data-form' exists in localstorage
  const dataForm = window.localStorage.getItem('data-form');
  if(dataForm) {
    return JSON.parse(dataForm); // we use JSON.parse to convert the string into Object again
  }
}

// here you get the data from localStorage when the page Load
function showData() {
  const dataFromLocalStorage = getDataFromLocalStorage();
  if (dataFromLocalStorage) {
    name1.value = dataFromLocalStorage.name;
    email1.value = dataFromLocalStorage.email;
    textarea.value = dataFromLocalStorage.textarea;
  }
}
// here you get your data from the Contact Form
name1.addEventListener('input', function() {
  const objectWithTheData = getData();
  // here you save the data in localStorage
  setDataLocalStorage(objectWithTheData);
});
email1.addEventListener('input', function() {
  const objectWithTheData = getData();
  // here you save the data in localStorage
  setDataLocalStorage(objectWithTheData);
});
textarea.addEventListener('input', function() {
  const objectWithTheData = getData();
  // here you save the data in localStorage
  setDataLocalStorage(objectWithTheData);
});
showData();
//Happy Coding!

