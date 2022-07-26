const Item = require('./item');

class Cart {
  constructor(id) {
    this.items = [];
    this.removedItems = [];
    this.id = id;
    this.checkedOut = false;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => {
      if (i.product.getName() != item.product.getName()) {
        return true;
      }
      this.removedItems.push(i);
      return false;
    });
  }

  getItems() {
    return this.items.slice();
  }

  getRemovedItems() {
    return this.removedItems.slice();
  }

  checkOut() {
    this.checkedOut = true;
    const products = [];
    this.items.forEach((item) => {
      for (let index = 0; index < item.quantity; index++) {
        products.push(item.product);
      }
    });
    return products;
  }

  equals(otherCard) {
    return this.id == otherCard.id;
  }

  toString() {
    return `Cart { id: ${this.id}, items : [${this.items}], removedItems : [${this.removedItems}]}`;
  }
}

module.exports = Cart;
