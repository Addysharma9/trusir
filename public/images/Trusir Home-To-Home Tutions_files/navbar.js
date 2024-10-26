function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('show'); // Toggle the menu visibility
    hamburger.classList.toggle('open'); // Add/remove the open class
}
