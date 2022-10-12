/*jshint esversion: 6 */

class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
    this.goods = [
      {
        id: 1,
        title: 'Notebook',
        price: 2000,
        imgSrc: 'https://content2.onliner.by/catalog/device/main/816f82647ed368b05e2b18de2ab04431.jpeg'
      },
      {
        id: 2,
        title: 'Mouse',
        price: 20,
        imgSrc: 'https://content2.onliner.by/catalog/device/main/856f1a7969e714d50abd7e159c0fa53d.jpeg'
      },
      {
        id: 3,
        title: 'Keyboard',
        price: 200,
        imgSrc: 'https://content2.onliner.by/catalog/device/main/474ba01b18fc4dd00d78df48111baf91.jpeg'
      },
      {
        id: 4,
        title: 'Gamepad',
        price: 50,
        imgSrc: 'https://content2.onliner.by/catalog/device/main/30eeb5325e8829c7524466668f1062fc.jpeg'
      }
    ];
  }

  render() {
    const prodRender = document.querySelector(this.container);

    this.goods.forEach(element => {
      let item = new ProductItem(element);

      prodRender.innerHTML += item.render();
    });
  }

}

class ProductItem {
  constructor({id, title, price, imgSrc}) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.imgSrc = imgSrc;
  }
  render() {
    return `<div class="product-item" id=${this.id}>
                <div class="img_wrapper">
                  <img src=${this.imgSrc} alt=${this.title}>
                </div>              
                <h3 data-title=${this.title} class="product-item_title">${this.title}</h3>
                <p data-price=${this.price} class="product-item_price">${this.price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`;
  }
}

class CartList {
  constructor() {
    this.cartListArr = [];
    this.totalCount = 0;
    this._findTotalCount();
  }

  _findTotalCount() {

  }

}

class CartItem {
  constructor() {
    this.countOfItem = 0;
  }
  _deleteItem() {

  }
  _incrementItem() {

  }
  _decrementItem() {

  }
}

const products = new ProductsList();