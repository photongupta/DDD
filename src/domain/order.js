class Order {
  constructor(products) {
    this.products = products;
  }

  toString() {
    return `Order { products : ${this.products} }`;
  }
}

module.exports = Order;
