class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Product { name : ${this.name}, price : ${this.price}}`;
  }
}

module.exports = Product;
