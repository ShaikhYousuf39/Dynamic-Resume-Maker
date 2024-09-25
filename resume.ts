// Retrieve data from localStorage
const userName = localStorage.getItem('name');
const email = localStorage.getItem('email');
const phone = localStorage.getItem('phone');
const education = localStorage.getItem('education');
const workExperience = localStorage.getItem('workExperience');
const skills = localStorage.getItem('skills');

// Display the data in the resume preview page
(document.getElementById('display-name') as HTMLElement).textContent = userName;
(document.getElementById('display-email') as HTMLElement).textContent = email;
(document.getElementById('display-phone') as HTMLElement).textContent = phone;
(document.getElementById('display-education') as HTMLElement).textContent = education;
(document.getElementById('display-work-experience') as HTMLElement).textContent = workExperience;
(document.getElementById('display-skills') as HTMLElement).textContent = skills;
