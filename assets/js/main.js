// Ensure only one dropdown menu is open at a time
document.addEventListener('DOMContentLoaded', () => {
    const navDetails = document.querySelectorAll('nav details');

    navDetails.forEach(details => {
        details.addEventListener('toggle', () => {
            if (details.open) {

                // Close all other dropdown menus
                navDetails.forEach(other => {
                    if (other !== details) other.open = false;
                });
            }
        });
    });
});