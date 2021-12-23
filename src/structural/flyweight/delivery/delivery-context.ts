import DeliveryFactory from './delivery-factory';

const deliveryContext = (
  factory: DeliveryFactory,
  name: string,
  number: string,
  street: string,
  city: string
): void => {
  const location = factory.makeLocation({
    street,
    city,
  });

  location.delivery(name, number);
};

export default deliveryContext;
