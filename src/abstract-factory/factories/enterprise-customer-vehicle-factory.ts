import CreateCustomerVehicleFactory from './customer-vehicle-factory';

import Customer from '../customer/customer';
import EnterpriseCustomer from '../customer/enterprise-customer';

import Vehicle from '../vehicle/vehicle';
import EnterpriseCar from '../vehicle/enterprise-car';

class EnterpriseCustomerVehicleFactory implements CreateCustomerVehicleFactory {
  constructor() {}

  public createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  public createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);

    return new EnterpriseCar(vehicleName, customer);
  }
}

export default EnterpriseCustomerVehicleFactory;
