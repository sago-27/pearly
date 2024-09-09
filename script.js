document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        dropdownContent.classList.toggle('show'); // Toggle visibility
    });

    // Close dropdown if click outside of it
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
