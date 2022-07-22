const Item = require('./item');

class Cart {
  constructor() {
    this.items = [];
    this.removedItems = [];
  }

  addProduct(product, quantity = 1) {
    this.items.push(new Item(product, quantity));
  }

  removeProduct(product) {
    this.items = this.items.filter((item) => {
      if (item.product.getName() == product.getName()) {
        this.removedItems.push(item);
      }
      return item.product.getName() != product.getName();
    });
  }

  getRemovedProducts() {
    return this.removedItems.slice();
  }

  getProducts() {
    return this.items.slice();
  }

  toString() {
    return JSON.stringify(this.items);
  }
}

module.exports = Cart;
