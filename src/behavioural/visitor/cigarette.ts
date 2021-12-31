import VisitableProduct from './visitable-product';
import TaxVisitorProtocol from './tax-visitor-protocol';

class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  public getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}

export default Cigarette;
