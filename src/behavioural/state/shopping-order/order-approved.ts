import OrderPending from './order-pending';
import OrderRejected from './order-rejected';
import ShoppingOrder from './shopping-order';
import ShoppingOrderState from './shopping-order-state-';

class OrderApproved implements ShoppingOrderState {
  private name = 'OrderApproved';

  constructor(private order: ShoppingOrder) {}

  public getName(): string {
    return this.name;
  }

  public approvePayment(): void {
    console.log('O pedido já está no estado pagamento aprovado.');
  }

  public rejectPayment(): void {
    this.order.setState(new OrderRejected());
  }

  public waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  public shipOrder(): void {
    console.log('Enviando pedido para o cliente...');
  }
}

export default OrderApproved;
