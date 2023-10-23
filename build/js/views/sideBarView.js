const burgerBars = document.querySelector(".bars-list");
const list = document.querySelector(".links");

burgerBars.addEventListener("click", () => {
  console.log("here");
  list.classList.toggle("show-listed__items");
  list.classList.toggle("animeate-mov");
});

const topSearchBarContanier = document.querySelector(".bar-top");
const bottomSearchBarContanier = document.querySelector(".bar-bottom");
const showBottomSearchBar = document.querySelector(".glass-show");
const topSearchBar = topSearchBarContanier.querySelector(".search-bar");
console.log(bottomSearchBarContanier);
console.log(topSearchBar);

topSearchBar.addEventListener("focus", () => {
  topSearchBarContanier.classList.toggle("search-shrink");
  topSearchBarContanier.classList.toggle("search-extend");
});

topSearchBar.addEventListener("blur", () => {
  topSearchBarContanier.classList.toggle("search-extend");
  topSearchBarContanier.classList.toggle("search-shrink");
});

showBottomSearchBar.addEventListener("click", () => {
  bottomSearchBarContanier.classList.toggle("appear");
});