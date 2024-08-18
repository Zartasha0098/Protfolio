const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    // Check if the toggleIcon currently has the 'bx-sun' class
    if (toggleIcon.classList.contains('bx-sun')) {
        // If it does, remove 'bx-sun' and add 'bx-moon'
        toggleIcon.classList.remove('bx-sun');
        toggleIcon.classList.add('bx-moon');
    } else {
        // If it doesn't, remove 'bx-moon' and add 'bx-sun'
        toggleIcon.classList.remove('bx-moon');
        toggleIcon.classList.add('bx-sun');
    }
});
