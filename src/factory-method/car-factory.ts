import VehicleFactory from './vehicle-factory';
import Vehicle from './vehicle';
import Car from './car';

class CarFactory extends VehicleFactory {
  // Factory Method
  public getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}

export default CarFactory;
