document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const dropdownToggles = document.querySelectorAll('.pulse-dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const dropdownMenu = this.nextElementSibling; // Get the next sibling, which should be the dropdown menu

            // Toggle 'show' class
            if (dropdownMenu && dropdownMenu.classList.contains('pulse-dropdown-menu')) {
                dropdownMenu.classList.toggle('show');
            }

            // Close other dropdowns
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherDropdownMenu = otherToggle.nextElementSibling;
                    if (otherDropdownMenu && otherDropdownMenu.classList.contains('pulse-dropdown-menu')) {
                        otherDropdownMenu.classList.remove('show');
                    }
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        dropdownToggles.forEach(toggle => {
            const dropdownMenu = toggle.nextElementSibling;
            if (dropdownMenu && dropdownMenu.classList.contains('pulse-dropdown-menu') && !toggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    });
});
