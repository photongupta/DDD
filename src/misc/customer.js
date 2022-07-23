class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.accounts = [];
  }

  updateAddress(address) {
    this.address = address;
    this.accounts.forEach((account) => account.updateAddress(address));
  }

  addAccount(account) {
    this.accounts.push(account);
    account.updateAddress(this.address);
  }

  toString() {
    return `Customer { name : ${this.name}, address : ${this.address}, accounts : [${this.accounts}]}`;
  }
}

module.exports = Customer;
