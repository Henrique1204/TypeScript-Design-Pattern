import ShoppingOrderState from './shopping-order-state-';

class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor() {}

  public getName(): string {
    return this.name;
  }

  public approvePayment(): void {
    console.log('Não posso aprovar o pagamento, pois o pedido foi recusado.');
  }

  public rejectPayment(): void {
    console.log('O pedido já está no estado pagamento rejeitado.');
  }

  public waitPayment(): void {
    console.log(
      'Não posso mover para pagamento pendente, pois o pedido foi recusado.'
    );
  }

  public shipOrder(): void {
    console.log('Não posso enviar um pedido recusado.');
  }
}

export default OrderRejected;
