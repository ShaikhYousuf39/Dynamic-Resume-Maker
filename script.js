var form = document.getElementById('resume-form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    // Save the data to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('education', education);
    localStorage.setItem('workExperience', workExperience);
    localStorage.setItem('skills', skills);
    // Redirect to the resume preview page
    window.location.href = 'resume.html';
});
