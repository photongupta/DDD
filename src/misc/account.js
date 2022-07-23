function getIdGenerator() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const generateId = getIdGenerator();

class Account {
  constructor(address) {
    this.id = generateId();
    this.address = address;
  }

  updateAddress(address) {
    this.address = address;
  }

  toString() {
    return `Account { id : ${this.id}, address : ${this.address}}`;
  }
}

module.exports = Account;
