class Item {
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  toString() {
    return `Item {Product :${this.product.toString()}, Quantity :${this.quantity.toString()}}`;
  }
}

module.exports = Item;
