document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.getElementById("contact-link");
    const contactSection = document.getElementById("contact");

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (contactSection.style.display === "none" || contactSection.style.display === "") {
            contactSection.style.display = "block";
            contactSection.scrollIntoView({ behavior: "smooth" });
        } else {
            contactSection.style.display = "none";
        }
    });
});
