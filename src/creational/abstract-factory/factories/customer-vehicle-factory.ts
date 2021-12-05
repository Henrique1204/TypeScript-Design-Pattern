import Customer from '../customer/customer';
import Vehicle from '../vehicle/vehicle';

interface CreateCustomerVehicleFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}

export default CreateCustomerVehicleFactory;
