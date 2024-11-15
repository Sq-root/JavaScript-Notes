const modalBtn = document.querySelector("#pribtn");
const modalPopup = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#clsBtn");

modalBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openPopup();
});

closeModalBtn.addEventListener("click", () => {
  closePopup();
});

function openPopup() {
  modalPopup.style.display = "block";
}

function closePopup() {
  modalPopup.style.display = "none";
}

window.addEventListener("click", () => {
  closePopup();
});
