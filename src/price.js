class Price {
  constructor(value, currency) {
    this.value = value;
    this.currency = currency;
  }

  toString() {
    return `Price :{value : ${this.value}, currency : ${this.currency}}`;
  }
}

module.exports = Price;
