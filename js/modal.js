var openFormButton = document.querySelector(".btn_search");
var modal = document.querySelector(".modal_search");
var searchForm = modal.querySelector(".search_form");
var arrivalDate = searchForm.querySelector(".arrival");
var departureDate = searchForm.querySelector(".departure");
var adultNumbers = searchForm.querySelector(".adult");
var childNumbers = searchForm.querySelector(".child");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adult");
} catch (err) {
  isStorageSupport = false;
}

openFormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modal.classList[1] === "modal_show") {
    modal.classList.add("modal_go-up");
    setTimeout(function() {modal.classList.remove("modal_show");},500);
    modal.classList.remove("modal_error");
  } else {
    modal.classList.remove("modal_go-up");
    modal.classList.add("modal_show");

      arrivalDate.focus();
      if (storage) {
        adultNumbers.value = storage;
        childNumbers.value = storage;
      }
  }
});


searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adultNumbers.value) {
    evt.preventDefault();
    modal.classList.remove("modal_error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal_error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("adult", adultNumbers.value);
    localStorage.setItem("child", childNumbers.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal_show")) {
      evt.preventDefault();
      modal.classList.add("modal_go-up");
      setTimeout(function() {modal.classList.remove("modal_show");},500);
      modal.classList.remove("modal_error");
    }
  }
});
