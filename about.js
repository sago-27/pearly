document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-item');
    let currentIndex = 0;

    const updateDisplay = () => {
        products.forEach((product, index) => {
            product.classList.remove('active');
            if (index === currentIndex) {
                product.classList.add('active');
            }
        });
    };

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        updateDisplay();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        updateDisplay();
    });

    // Initialize the first product as active
    updateDisplay();
});
// Add this to your script.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle page transitions
    function handlePageTransition() {
        document.body.classList.add('page-transition-enter');
        
        // Remove the class after the transition ends
        setTimeout(() => {
            document.body.classList.remove('page-transition-enter');
            document.body.classList.add('page-transition-enter-active');
        }, 100); // Slight delay to trigger the transition
        
        // Add an event listener for when the page unloads
        window.addEventListener('beforeunload', function() {
            document.body.classList.remove('page-transition-enter-active');
            document.body.classList.add('page-transition-exit');
        });
    }

    // Add the page transition effect on page load
    handlePageTransition();
});
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    // Function to check if element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add the 'visible' class to elements in the viewport
    function animateMenuItems() {
        menuItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('visible');
            }
        });
    }

    // Add event listeners for scroll and resize
    window.addEventListener('scroll', animateMenuItems);
    window.addEventListener('resize', animateMenuItems);

    // Run animation on page load
    animateMenuItems();
});
