// Ukrycie wszystkich sekcji po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.frame');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
});

// Funkcja do przełączania sekcji
function toggleSection(sectionId) {
    var sections = document.querySelectorAll('.frame');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

window.onload = function() {
    document.getElementById("powitanie").style.display = "block";
};

// Funkcja generująca losowy identyfikator
