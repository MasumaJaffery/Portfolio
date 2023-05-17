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
