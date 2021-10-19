const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModal = document.querySelectorAll(".btn--show-modal");
console.log(openModal);
const closeModal = document.querySelector(".btn--close-modal");
console.log(modal);

//function declaration
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// addEventListeners...

openModal.forEach((b) => b.addEventListener("click", showModal));

// hiding modal
if(closeModal){
    closeModal.addEventListener("click", hideModal);
    overlay.addEventListener("click", hideModal);
}

// fading nav links...
