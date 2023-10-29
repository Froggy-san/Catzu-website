import searchView from "./searchView.js";
const burgerBars = document.querySelector(".bars-list");
const list = document.querySelector(".links");
const toggleSideBar = () => {
  list.classList.remove("show-listed__items");
  list.classList.add("animeate-mov");
};
burgerBars.addEventListener("click", () => {
  console.log("here");
  list.classList.toggle("show-listed__items");
  list.classList.toggle("animeate-mov");
});
document.addEventListener("click", (e) => {
  const nothing = e.target.closest(".links");
  if (e.target === burgerBars) return;
  if (!nothing) toggleSideBar();
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
  searchView.clearInput();
  bottomSearchBarContanier.classList.toggle("appear");
});

document.addEventListener("keydown", (e) => {
  const esc = "Escape";
  if (e.key == esc) {
    toggleSideBar();
  }
});

const goUp = document.querySelector(".go-up");

const landing = document.querySelector(".galary");

// goUp.addEventListener("click", () => {
//   document.body.scrollHeight;
// });

const stickyBtn = function (entries) {
  const [entry] = entries;
  // console.log(entry, "HERE!");

  if (!entry.isIntersecting) goUp.classList.remove("hidden");
  else goUp.classList.add("hidden");
};

const headerObserver = new IntersectionObserver(stickyBtn, {
  root: null, // mmsh 3arf
  threshold: 0, // kam fel % men el target bayn fel shasha
  // rootMargin: `-${navHight}px`, // abl el threshold b -90px e3mel call ll function
});
headerObserver.observe(landing);
