import VisitableProduct from './visitable-product';
import TaxVisitorProtocol from './tax-visitor-protocol';

class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  public getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}

export default Food;
