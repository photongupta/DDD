class PriceCalculator {
  constructor(competitorProducts) {
    this.competitorProducts = competitorProducts;
  }

  getDiscountedPrice(productName, discountPercent) {
    const price = this.competitorProducts[productName].value;
    return (price * (100 - discountPercent)) / 100;
  }
}

module.exports = PriceCalculator;
