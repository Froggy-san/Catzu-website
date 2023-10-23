import * as model from "./model.js";
import * as slideView from "./views/sideBarView.js";
import * as sliderView from "./views/sliderView.js";
import productView from "./views/productView.js";
import searchView from "./views/searchView.js";
import sortView from "./views/sortView.js";

const controlInitProducts = async function () {
  try {
    await model.loadProducts();
    console.log(model.Products);
    productView.render(model.Products);
  } catch (err) {
    console.log(err);
  }
};

const controlSearch = async function () {
  try {
    const query = searchView.getQuery();

    if (!query) return;

    // const result = await model.loadSearchResults(model.Products, query);
    // console.log(result);
    // productView.changeTitle(query);
    // productView.render(result);
    // productView._scrollTo();
    productView.renderSpinner();
    // await model.loadProducts();
    model.loadSearchResults(model.Products, query);
    // model.clear();
    model.restSorting();
    model.restFilterArray();
    sortView.removeActive();
    removeActive(allFilterRange);
    // model.cl();
    console.log(model.results, "here!! 2222");
    console.log(model.Products, "Here!! 222");
    productView.changeTitle(query);
    productView.render(model.results);
    addOnSearch(query);
    productView._scrollTo();
    // model.filteringFunction();
  } catch (err) {
    console.log(err);
  }
};
// console.log("here");
// const controlSorting = async function () {
//   // const result2 =  model.sortBy(model.results, sortView.sortingBy, model.sorted);
//   // console.log(result2);
//   if (sortView.sortingBy == "price") {
//     let x = model.sortP(!model.sorted);
//     console.log(x);
//   }
// };

// _perentElement.addEventListener("click", function (e) {
//   let btn = e.target.closest(".sort-op");

//   if (!btn) return;
//   let x = btn.dataset.sort;

//   if (x != sortedBy) {
//     sortedBy = x;
//     model.sort(sortedBy);
//   } else {
//     sortedBy = "";
//     model.clearResults();
//   }

//   productView.render(
//     model.results.length != 0 ? model.results : model.Products
//   );
//   //console.log(this.sortingBy);
// });

const type = function (sortingBy) {
  if (sortingBy === "price") {
    return !model.sortedP;
  } else if (sortingBy === "title") {
    return !model.sortedT;
  } else if (sortingBy === "rating") {
    return !model.sortedR;
  }
};
const controlSorting = function (sortingBy) {
  console.log(sortingBy);

  model.sorting(sortingBy, type(sortingBy));

  productView.render(model.sortedResults);
};
controlInitProducts();
searchView.addHandlerSearch(controlSearch);
sortView.addEventHandler(controlSorting);

//
//
//

//
//
//

///
//

const toggleFunc = function () {
  if (!btn.classList.contains("btn--active")) {
    allBtn.forEach((btn) => btn.classList.remove("btn--active"));
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
};

// sortView.addEventHandler(controlSorting);

// _perentElement.addEventListener("click", function (e) {
//   const btn = e.target.closest(".sort-op");

//   if (!btn) return;

//   const sortBy = btn.dataset.sort;
//   console.log(sortBy);
//   const type = function () {
//     if (sortBy === "price") {
//       return !model.sortedP;
//     } else if (sortBy === "title") {
//       return !model.sortedT;
//     } else if (sortBy === "rating") {
//       return !model.sortedR;
//     }
//   };

//   if (!btn.classList.contains("btn--active")) {
//     removeActive();
//     btn.classList.add("btn--active");
//   } else {
//     btn.classList.remove("btn--active");
//   }
//   model.sortBy2(sortBy, type());
//   console.log(model.sortedResults);
//   console.log(model.sortedP);
//   productView.render(model.sortedResults);
// });

const allFilterSec = document.querySelectorAll(".filter-sec");
const allFilterRange = document.querySelectorAll(".filter-range");
console.log(allFilterRange);
console.log(allFilterSec);
const toggle = function (btn, selectedBtns, className) {
  if (!btn.classList.contains("btn--active")) {
    removeActive(selectedBtns);
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
  console.log(btn, selectedBtns, className);
};
const removeActive = (btn) => {
  btn.forEach((btn) => btn.classList.remove("btn--active"));
  sortView.removeActive();
};
const toggle2 = function (btn, selectedBtns) {
  removeActive(selectedBtns);
  btn.classList.toggle("btn--active");
};
// to add btn--active based on search queries
// const addOnSearch = function (searchQuery) {
//   allFilterSec.forEach((el) => {
//     if (el.dataset.query === searchQuery) {
//       console.log(el);
//       removeActive(allFilterSec);
//       el.classList.toggle("btn--active");
//     } else {
//       removeActive(allFilterSec);
//     }
//   });
// };
// addOnSearch("clothing");
const addOnSearch = function (searchQuery) {
  // Remove the active class from all buttons first
  removeActive(allFilterSec);
  // Loop through all buttons and check for matching query
  allFilterSec.forEach((el) => {
    if (el.dataset.query === searchQuery) {
      console.log(el);
      // Add the active class to the matching button
      el.classList.toggle("btn--active");
    }
  });
};
// addOnSearch("electronics");
const falsyTruthy = function (min, max) {
  if (min === 0 && max === 50) {
    return !model.filtedPriceRange1;
  }
  if (min === 50 && max === 200) {
    return !model.filtedPriceRange2;
  }
  if (min === 200 && max === 600) {
    return !model.filtedPriceRange3;
  }
  if (isNaN(min) || isNaN(max)) {
    return !model.filtedPriceRange4;
  }
};
const filterContainer = document.querySelector(".filter");
console.log(filterContainer);
filterContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-op");
  if (!btn) return;

  if (btn.dataset.query) {
    console.log(btn.dataset.query);
    if (btn.dataset.query === "Variety") {
      productView.render(model.Products);
      model.restFilters();
      model.restSorting();
      model.restFilterArray();
      model.restResultsArray();
      productView.changeTitle(btn.dataset.query);
    } else {
      model.loadSearchResults(model.Products, btn.dataset.query);
      console.log(model.results, "here!!!!!!");
      console.log(model.Products, "Products!!!!");
      productView.render(model.results);
      model.restFilters();
      model.restSorting();
      model.restFilterArray();
      productView.changeTitle(btn.dataset.query);
      model.loadSearchResults(model.Products, btn.dataset.query);
      productView.render(model.results);
    }
    toggle2(btn, allFilterSec);
    removeActive(allFilterRange);
  }

  if (btn.dataset.from) {
    console.log(parseInt(btn.dataset.from), btn.dataset.to);

    model.filterByPrice(
      parseInt(btn.dataset.from),
      1000000,
      falsyTruthy(btn.dataset.from, btn.dataset.to)
    );
    toggle(btn, allFilterRange, "filter-range");
    productView.render(model.filtedResults);
  }
  if (btn.dataset.amount) {
    const currAmount = JSON.parse(btn.dataset.amount);
    console.log(currAmount);
    model.filterByPrice(
      currAmount[0],
      currAmount[1],
      falsyTruthy(currAmount[0], currAmount[1])
    );
    toggle(btn, allFilterRange, "filter-range");
    productView.render(model.filtedResults);
  }

  console.log(model.filtedResults);
});

// export const getSearchResultsPage = function (page = state.search.page) {
//   state.search.page = page;

//   const start = (page - 1) * 10; // 0
//   const end = page * 10; // 9
//   return state.search.results.slice(start, end);
// };
const x = function () {
  if (model.sortedResults.length !== 0) {
    return model.sortedResults;
  } else if (model.filtedResults.length !== 0) {
    return model.filtedResults;
  } else if (model.results.length !== 0) {
    return model.results;
  } else {
    return model.Products;
  }
};

const b = function () {
  if (model.Products) {
    return model.Products;
  }
};
const controlWishList = function (id) {
  // model.addToWishlist(id);
  // console.log(model.Products);
  // console.log(model.results);
  // console.log(model.filtedResults);
  const item = model.Products.find((el) => el.id === id);
  console.log(item, "ASASad");
  if (!item.wished) {
    model.addToWishlist(id);
  } else {
    model.deleteWishList(id);
  }
  productView.update(x());
};

productView.addToWishListHandler(controlWishList);
