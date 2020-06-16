let openSearch = document.querySelector(".btn_search");
let searchPopup = document.querySelector(".modal_search");
let searchForm = document.querySelector(".search_form");
let arrivalDate = searchPopup.querySelector(".arrival");
let departureDate = searchPopup.querySelector(".departure");

openSearch.addEventListener("click", function () {

  searchPopup.classList.toggle("modal_show");
  arrivalDate.focus();
});
