const modal = document.querySelector("#modal-container");
const openModalBtn = document.querySelector("#open-modal");
const modalOkayBtn = document.querySelector("#modal-okay");
const modalCloseBtn = document.querySelector("#modal-close");

const closeModal = () => {
  modal.classList.add("hide");
};

const openModal = () => {
  modal.classList.remove("hide");
};

openModalBtn.addEventListener("click", () => {
  console.log("clicked");
  openModal();
});
modal.addEventListener("click", closeModal);
modalOkayBtn.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);
