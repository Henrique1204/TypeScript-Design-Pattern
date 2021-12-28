import OrderApproved from './order-approved';
import OrderRejected from './order-rejected';
import ShoppingOrder from './shopping-order';
import ShoppingOrderState from './shopping-order-state-';

class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  public getName(): string {
    return this.name;
  }

  public approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  public rejectPayment(): void {
    this.order.setState(new OrderRejected());
  }

  public waitPayment(): void {
    console.log('O pedido já está no estado pagamento pendente.');
  }

  public shipOrder(): void {
    console.log(
      'Não posso enviar o pedido com pagamento pendente para o cliente.'
    );
  }
}

export default OrderPending;
