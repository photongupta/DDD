const Product = require('../src/product');
const Cart = require('../src/cart');
const {assert} = require('chai');

describe('Product', function () {
  describe('addProduct', function () {
    it('should add project in cart', function () {
      const book = new Product('book');
      const cart = new Cart();
      cart.addProduct(book);

      const actual = cart.getProducts();
      assert.equal(1, actual.length);
      assert.equal('book', actual[0].getName());
    });
  });
});
