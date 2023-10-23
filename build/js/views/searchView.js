import productView from "./productView.js";

class SearchView {
  _parentEl = document.querySelector(".bar-top");

  getQuery() {
    const query = this._parentEl.querySelector(".search-bar").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector(".search-bar").value = "";
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();

      handler();

      // productView._header.innerHTML = this.getQuery();
    });
  }
}

export default new SearchView();
