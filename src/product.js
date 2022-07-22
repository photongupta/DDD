class Product {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Product { name : ${this.name} }`;
  }
}

module.exports = Product;
