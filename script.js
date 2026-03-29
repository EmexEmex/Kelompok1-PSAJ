// =========================
// NAVBAR (punya kamu - tetap)
// =========================
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


// =========================
// SLIDER DOKUMENTASI
// =========================
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider-btn.left');
const btnRight = document.querySelector('.slider-btn.right');

// cek dulu biar tidak error di halaman lain
if (slider && btnLeft && btnRight) {

    btnRight.addEventListener('click', () => {
        slider.scrollBy({
            left: 320,
            behavior: 'smooth'
        });
    });

    btnLeft.addEventListener('click', () => {
        slider.scrollBy({
            left: -320,
            behavior: 'smooth'
        });
    });

}