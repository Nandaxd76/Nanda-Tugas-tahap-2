// ======================================
// MOBILE NAVIGATION
// ======================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// Menutup menu setelah link diklik

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ======================================
// FORM SARAN
// ======================================

const suggestionForm = document.getElementById("suggestionForm");
const formMessage = document.getElementById("formMessage");

suggestionForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Mohon isi semua bagian terlebih dahulu.";
        formMessage.style.color = "#cc0000";
        return;
    }

    formMessage.textContent =
        `Terima kasih, ${name}! Saran kamu berhasil dicatat.`;

    formMessage.style.color = "#333";

    suggestionForm.reset();
});


// ======================================
// TAHUN OTOMATIS
// ======================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// ======================================
// ANIMASI SAAT SCROLL
// ======================================

const animatedElements = document.querySelectorAll(
    ".skill-card, .achievement-item, .about-content, .suggestion-form"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


// Kondisi awal animasi

animatedElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});
