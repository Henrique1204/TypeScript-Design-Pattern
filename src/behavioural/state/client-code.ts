import ShoppingOrder from './shopping-order/shopping-order';

const order = new ShoppingOrder();

order.approvePayment();
order.shipOrder();

order.waitPayment();
order.shipOrder();

order.rejectPayment();
order.shipOrder();

order.approvePayment();
order.shipOrder();
