class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products.slice();
  }

  toString() {
    return `Cart { products : ${this.products} }`;
  }
}

module.exports = Cart;
