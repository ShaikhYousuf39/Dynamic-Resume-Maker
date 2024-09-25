const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

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

