import ProductProtocol from './product-protocol';

class TShirt implements ProductProtocol {
  constructor(private name: string, private price: number) {}

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }
}

export default TShirt;
