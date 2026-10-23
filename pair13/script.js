// let heading = document.getElementsByTagName('h1');
// let heading2 = document.getElementById('profile-name');
// let profileName = document.getElementsByClassName('profile-role');
// let heading3 = document.querySelector('h2');
// let skills = document.querySelectorAll('.skill');
//
// console.log(heading);


let student = {
    name: 'Vlada',
    role: '11 IT',
    city: 'Kyiv',
    portfolio: 'https://github.com/vlalala/'
}

let nameElement = document.querySelector('.profile-name');
let roleElement = document.querySelector('.profile-role');
let cityElement = document.querySelector('.profile-city');
let portfolioElement = document.querySelector('.profile-portfolio');

nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.textContent = student.city;
portfolioElement.setAttribute('href', student.portfolio);

let skillsArray = ['HTML', 'CSS', 'JavaScript'];
//
let skills = document.querySelectorAll('.skill');
// skills[0].textContent = 'HTML';
// skills[1].textContent = 'CSS';
// skills[2].textContent = 'JavaScript';

for (let i = 0; i < skillsArray.length; i++) {
    skills[i].textContent = skillsArray[i];
}