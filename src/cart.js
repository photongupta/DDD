const Item = require('./item');

class Cart {
  constructor(generateId) {
    this.items = [];
    this.removedItems = [];
    this.id = generateId();
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

  equals(otherCard) {
    return this == otherCard;
  }

  toString() {
    return `Cart { id: ${this.id}, items : [${this.items}], removedItems : [${this.removedItems}]}`;
  }
}

module.exports = Cart;
