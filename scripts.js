document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.getElementById("contact-link");
    const contactSection = document.getElementById("contact");
    const navLinks = document.querySelectorAll(".nav-link");

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        contactSection.style.display = "block";
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            contactSection.style.display = "none";
        });
    });
});
