class Address {
  constructor(city) {
    this.city = city;
  }

  toString() {
    return `Address { city : ${this.city} }`;
  }
}

module.exports = Address;
