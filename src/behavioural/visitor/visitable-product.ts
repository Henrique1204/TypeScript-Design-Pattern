import TaxVisitorProtocol from './tax-visitor-protocol';

abstract class VisitableProduct {
  constructor(private name: string, protected price: number) {}

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  abstract getPriceWithTaxes(visitor: TaxVisitorProtocol): number;
}

export default VisitableProduct;
