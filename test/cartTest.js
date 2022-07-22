const Product = require('../src/product');
const Cart = require('../src/cart');
const {assert} = require('chai');

describe('Product', function () {
  describe('addProduct', function () {
    it('should add project in cart', function () {
      const book = new Product('book');
      const cart = new Cart();
      cart.addItem(book);

      const actual = cart.getItems();
      assert.equal(1, actual.length);
      assert.equal('book', actual[0].getName());
    });
  });
});
