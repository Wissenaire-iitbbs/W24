window.location.href = "../coming_soon";
const handleButtonClick = (card, buttons, sections) => (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about1" &&
  targetSection !== "#about2" &&
  targetSection !== "#about3" &&
  targetSection !== "#about4"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");

  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  const buttons = card.querySelectorAll(".card-buttons button");
  const sections = card.querySelectorAll(".card-section");
  buttons.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick(card, buttons, sections));
  });
});
