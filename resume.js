// Retrieve data from localStorage
var userName = localStorage.getItem('name');
var email = localStorage.getItem('email');
var phone = localStorage.getItem('phone');
var education = localStorage.getItem('education');
var workExperience = localStorage.getItem('workExperience');
var skills = localStorage.getItem('skills');
// Display the data in the resume preview page
document.getElementById('display-name').textContent = userName;
document.getElementById('display-email').textContent = email;
document.getElementById('display-phone').textContent = phone;
document.getElementById('display-education').textContent = education;
document.getElementById('display-work-experience').textContent = workExperience;
document.getElementById('display-skills').textContent = skills;
