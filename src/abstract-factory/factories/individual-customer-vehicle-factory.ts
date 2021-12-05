import CreateCustomerVehicleFactory from './customer-vehicle-factory';

import Customer from '../customer/customer';
import IndividualCustomer from '../customer/individual-customer';

import Vehicle from '../vehicle/vehicle';
import IndividualCar from '../vehicle/individual-car';

class IndividualCustomerVehicleFactory implements CreateCustomerVehicleFactory {
  constructor() {}

  public createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  public createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);

    return new IndividualCar(vehicleName, customer);
  }
}

export default IndividualCustomerVehicleFactory;
