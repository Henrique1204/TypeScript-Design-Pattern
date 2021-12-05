import EnterpriseCustomerVehicleFactory from './factories/enterprise-customer-vehicle-factory';
import IndividualCustomerVehicleFactory from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const enterpriseCar = enterpriseFactory.createVehicle('Fusca', 'Henrique');

enterpriseCar.pickUp();

const individualCar = individualFactory.createVehicle('Gol', 'Souza');

individualCar.pickUp();
