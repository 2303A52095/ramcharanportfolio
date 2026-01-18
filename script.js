// Typing effect
const text = "Computer Science Engineering Student | AI & ML Enthusiast";
let index = 0;
const typing = document.querySelector(".typing");

function type() {
    if (index < text.length) {
        typing.textContent += text.charAt(index);
        index++;
        setTimeout(type, 70);
    }
}
type();

// Scroll animations
const elements = document.querySelectorAll(
    ".slide-left, .slide-right, .slide-up, .slide-down"
);

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 120) {
            el.classList.add("show");
        }
    });
});

// Initial load
window.onload = () => {
    document.querySelectorAll(".slide-down, .slide-up").forEach(el => {
        el.classList.add("show");
    });
};
