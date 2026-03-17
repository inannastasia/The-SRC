// ISSUE 4: Mobile Hamburger Menu Logic
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    // Toggles the 'active' class to show/hide the vertical menu
    navLinks.classList.toggle('active');
});

// ISSUE 2: Form Submission Logic
const form = document.getElementById('sponsorship-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the page from reloading
    
    // Hide the form and show the success message
    form.style.display = 'none';
    successMessage.classList.remove('hidden');
    
    // Reset after 3 seconds so you can test it again
    setTimeout(() => {
        form.style.display = 'block';
        successMessage.classList.add('hidden');
        form.reset();
    }, 3000);
});
//commit branch pleaseeee