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
  console.log(arrival);
} catch (err) {
  isStorageSupport = false;
}

openFormButton.addEventListener("click", function () {
  modal.classList.toggle("modal_show");
  modal.classList.toggle("modal_hide");
  modal.classList.remove("modal_error");
  arrivalDate.focus();
  if (storage) {
    adultNumbers.value = storage;
    childNumbers.value = storage;
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
      modal.classList.remove("modal_show");
      modal.classList.remove("modal_error");
    }
  }
});
