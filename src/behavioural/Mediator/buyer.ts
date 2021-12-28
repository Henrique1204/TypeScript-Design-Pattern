import Mediator from './mediator';

class Buyer {
  constructor(private mediator: Mediator) {}

  public viewProducts(): void {
    this.mediator.showProducts();
  }

  public buy(id: string): void {
    this.mediator.buy(id);
  }
}

export default Buyer;
