import productView from "./productView.js";

class SearchView {
  _parentEl = document.querySelector(".bar-top");
  _secondSearchBar = document.querySelector(".bar-bottom");

  getQuery() {
    const query =
      this._parentEl.querySelector(".search-bar").value ||
      this._secondSearchBar.querySelector(".search-bar").value;
    this.clearInput();
    return query;
  }

  clearInput() {
    this._parentEl.querySelector(".search-bar").value = "";
    this._secondSearchBar.querySelector(".search-bar").value = "";
    [
      this._parentEl.querySelector(".search-bar"),
      this._secondSearchBar.querySelector(".search-bar"),
    ].forEach((el) => {
      el.value = "";
      el.blur();
    });
  }
  addHandlerSearch(handler) {
    [this._parentEl, this._secondSearchBar].forEach((el) =>
      el.addEventListener("submit", function (e) {
        e.preventDefault();

        handler();

        // productView._header.innerHTML = this.getQuery();
      })
    );
  }
}

export default new SearchView();
