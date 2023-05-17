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
//JS Pop Functionality<---->(JS Objects)
const Projects = [{
  img: 'Images/Snapshoot Portfolio.png',
  title: 'Tonic',
  skill: ['CANOPY','Back End Dev', '2023'],
  para: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML','CSS','JavaScript'],
  source: 'https://github.com/MasumaJaffery/Portfolio',
  livelink: 'https://masumajaffery.github.io/Portfolio/'
},
{
  img: 'Images/Snapshoot Portfolio (1).png',
  title: 'Multi-Post Stories',
  skill: ['CANOPY','Back End Dev','2023'],
  para: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML','CSS','JavaScript'],
  source:'https://github.com/MasumaJaffery/Portfolio',
  livelink: 'https://masumajaffery.github.io/Portfolio/'
},
{
  img: 'Images/Snapshoot Portfolio (2).png',
  title: 'Tonic',
  skill: ['CANOPY','Back End Dev', '2023'],
  para: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML','CSS','JavaScript'],
  source: 'https://github.com/MasumaJaffery/Portfolio',
  livelink: 'https://masumajaffery.github.io/Portfolio/'
},
{
  img: 'Images/Snapshoot Portfolio (3).png',
  title: 'Multi-Post Stories',
  skill: ['CANOPY','Back End Dev','2023'],
  para: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML','CSS','JavaScript'],
  source:'https://github.com/MasumaJaffery/Portfolio',
  livelink: 'https://masumajaffery.github.io/Portfolio/'
}];
// Use this Objects in Function Below
const ProjectsCard = document.getElementById('work');
function show(index) {
  ProjectsCard.innerHTML += 
  `<div class="work-card"> 
  <div class="work-img">
      <img class="img1" src="${Projects[index].img}">
  </div>
  <div class="work-detials">
      <h2>${Projects[index].title}</h2>
      <div class="align">
          <ul>
              <span>${Projects[index].skill[0]}</span>
              <li>${Projects[index].skill[1]}<</li>
              <li>${Projects[index].skill[2]}<</li>
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
          <button type = "button" class = "btn">See Project</button>
      </div>
  </div>
</div>`;
}
//For Loop to Deal with Array of Objects;
for(let i = 0; i < Projects.length; i += 1) {
  show(i);
}