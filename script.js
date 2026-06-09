// Čekamo da se stranica učita
document.addEventListener("DOMContentLoaded", () => {
    const heroHeader = document.querySelector('.hero');
    const mainMenu = document.querySelector('.menu');
    const backButton = document.getElementById('backBtn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Funkcija za otvaranje Slike, Intervjui ili Glazba
    window.showSection = function(sectionId) {
        // Sakrij početni naslov i tri ikone
        if (heroHeader) heroHeader.classList.add('hidden');
        if (mainMenu) mainMenu.classList.add('hidden');
        
        // Prikaži gumb za natrag
        if (backButton) backButton.classList.remove('hidden');
        
        // Prikaži sekciju koju smo kliknuli
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    };

    // Funkcija za povratak na početak
    window.goHome = function() {
        // Sakrij gumb natrag
        if (backButton) backButton.classList.add('hidden');
        
        // Sakrij sve tri sekcije sa sadržajem
        const allPages = document.querySelectorAll('.page');
        allPages.forEach(page => {
            page.classList.add('hidden');
        });
        
        // Zaustavi videe ako sviraju
        document.querySelectorAll('video').forEach(video => video.pause());
        
        // Ponovno prikaži glavni naslov i tri ikone
        if (heroHeader) heroHeader.classList.remove('hidden');
        if (mainMenu) mainMenu.classList.remove('hidden');
    };

    // Lightbox za otvaranje slika
    window.openLightbox = function(imageSrc) {
        if (lightbox && lightboxImg) {
            lightboxImg.src = imageSrc;
            lightbox.style.display = 'flex';
        }
    };

    window.closeLightbox = function() {
        if (lightbox) {
            lightbox.style.display = 'none';
        }
    };
});