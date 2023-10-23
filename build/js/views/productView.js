import View from "./views.js";
class ProductView extends View {
  _perentElement = document.querySelector(".products-list");
  _allSortBtn = this._perentElement.querySelectorAll(".sort-op");
  _allCars = this._perentElement.querySelectorAll(".product-item");
  _errorMessage = `Sorry there are no products with that name`;
  _container = this._perentElement.closest(".product-container");
  _header = this._container.querySelector(".cate-title");
  _discountSpan = this._perentElement.querySelectorAll(".discount");
  _priceSpan = this._perentElement.querySelectorAll(".price");

  constructor() {
    super();
    // console.log(this._header);
    // console.log(this._discountSpan);
    // console.log(this._allCars);

    // this._priceSpan.forEach((el) => {});

    console.log(this._allCars);
  }

  addToWishListHandler(handler) {
    this._perentElement.addEventListener("click", (e) => {
      const wishBtn = e.target.closest(".wish-logo");
      if (!wishBtn) return;
      const id = wishBtn.closest(".product-item");
      console.log(+id.dataset.id);
      handler(+id.dataset.id);
    });
  }
  see() {
    this._allCars.forEach((el) => console.log(el.image));
  }
  _generateMarkup() {
    return this._data.map(this._generateMarkupPro).join("");
  }
  changeTitle(query) {
    this._header.textContent = query;
  }
  _scrollTo() {
    this._container.scrollIntoView({ behavior: "smooth" });
  }
  _generateMarkupPro(result) {
    if (result.discountedPrice) {
      return `
    <div data-wished="false" data-id="${result.id}" class="product-item" >
      <div class = "card" href="productView.html" >
      <div class="img-container" >
        <img  src="${result.image}">
      </div>
        <p class="item-title" >${result.title}</p>
        <div class="rating" data-rate="" >${result.rating.rate}/5</div>
        <div class="praice-discount">
               <div class="price" >
                <del class="discount">£E${result.discountedPrice}.00</del>
                <span class="price" >£E${result.price}.00</span>
               </div>
               <span class="wish-logo" > <i class="fa-${
                 result.wished ? "solid" : "regular"
               } fa-heart"></i></span>  
          </div>
      </div>
    </div>`;
    }

    if (!result.discountedPrice) {
      return `
      <div data-wished="false" data-id="${result.id}" class="product-item" >
        <div class = "card" href="productView.html" >
        <div class="img-container" >
          <img  src="${result.image}">
        </div>
          <p class="item-title" >${result.title}</p>
          <div class="rating" data-rate="" >${result.rating.rate}/5</div>
          <div class="praice-discount">
                 <div class="price" >
                  <span class="price only-price" >£E${result.price}.00</span>
                 </div>
             <span class="wish-logo" > <i class="fa-${
               result.wished ? "solid" : "regular"
             } fa-heart"></i></span>
            </div>
        </div>
      </div>`;
    }

    // return `
    // <div data-wished="false" data-item-id="${result.id}" class="product-item" >
    //   <div class = "card" href="productView.html" >
    //   <div class="img-container" >
    //     <img  src="${result.image}">
    //   </div>
    //     <p class="item-title" >${result.title}</p>
    //     <div class="rating" data-rate="" >${result.rating.rate}</div>
    //     <div class="praice-discount">
    //            <div class="price" >
    //             <del class="discount">${
    //               result.discountedPrice ? result.discountedPrice : ""
    //             }</del>
    //             <span class="price" >${result.price}</span>
    //            </div>
    //        <span class="wish-logo" > <i class="fa-regular fa-heart"></i></span>
    //       </div>
    //   </div>
    // </div>`;
  }
}

export default new ProductView();
