import OrderPending from './order-pending';
import ShoppingOrderState from './shopping-order-state-';

class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  public getState(): ShoppingOrderState {
    return this.state;
  }

  public setState(state: ShoppingOrderState): void {
    this.state = state;

    console.log('O estado do pedido agora é', this.state.getName());
  }

  public getStateName(): string {
    return this.state.getName();
  }

  public approvePayment(): void {
    this.state.approvePayment();
  }

  public rejectPayment(): void {
    this.state.rejectPayment();
  }

  public waitPayment(): void {
    this.state.waitPayment();
  }

  public shipOrder(): void {
    this.state.shipOrder();
  }
}

export default ShoppingOrder;
