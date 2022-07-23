const Account = require('./account');
const Address = require('./address');
const Customer = require('./customer');

function main() {
  const banglore = new Address('Banglore');
  const customer = new Customer('John', banglore);
  console.log(customer.toString());

  const account1 = new Account(1234, banglore);
  const account2 = new Account(5678, banglore);
  customer.addAccount(account1);
  customer.addAccount(account2);
  console.log(customer.toString());

  const lucknow = new Address('Lucknow');
  customer.updateAddress(lucknow);
  console.log(customer.toString());

  const account3 = new Account(5678, banglore);
  customer.addAccount(account3);
  console.log(customer.toString());
}

main();
