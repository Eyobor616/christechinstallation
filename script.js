const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navigation = document.querySelector("#primary-navigation");
const navLinks = document.querySelectorAll(".nav-link a");


const toggleMenu = (shouldOpen) => {
    if (!navigation || !menuOpenButton) return;

    const isOpen = typeof shouldOpen === "boolean" ? shouldOpen : !document.body.classList.contains("show-mobile-menu");
    document.body.classList.toggle("show-mobile-menu", isOpen);
    menuOpenButton.setAttribute("aria-expanded", String(isOpen));
};

menuOpenButton?.addEventListener("click", () => toggleMenu());
menuCloseButton?.addEventListener("click", () => toggleMenu(false));

navLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
});

const form = document.querySelector(".contact-form");
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name") || "there";

    alert(`Thanks, ${name}! Our team will reach out shortly to discuss your solar needs.`);
    form.reset();
});

const currentYearElement = document.querySelector("#current-year");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}
