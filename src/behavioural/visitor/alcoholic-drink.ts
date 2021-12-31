import VisitableProduct from './visitable-product';
import TaxVisitorProtocol from './tax-visitor-protocol';

class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcoholicDrink', price);
  }

  public getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}

export default AlcoholicDrink;
