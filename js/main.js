/*jshint esversion: 6 */

const products = [
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
  },
];

document.addEventListener("DOMContentLoaded", () => {
  'use strict';

  let renderProduct = ({id, title, price, imgSrc}) => {
    return `<div class="product-item" id=${id}>
                <div class="img_wrapper">
                  <img src=${imgSrc} alt=${title}>
                </div>              
                <h3 data-title=${title} class="product-item_title">${title}</h3>
                <p data-price=${price} class="product-item_price">${price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`;
  };
  const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));

    document.querySelector('.products').innerHTML = productsList.join(' ');
  };

  renderPage(products);

  function clickHandler(event) {
    event.preventDefault();

    let currentItem = event.target.parentNode;
    let price = parseInt(currentItem.querySelector('[data-price]').textContent);
    console.log(price);
  }

  let prodItems = document.querySelectorAll('.product-item');
  prodItems.forEach(el => {
    el.addEventListener('click', clickHandler);
  });
});