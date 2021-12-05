import VehicleFactory from './vehicle-factory';
import Vehicle from './vehicle';
import Bicycle from './bicycle';

class BicycleFactory extends VehicleFactory {
  // Factory Method
  public getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}

export default BicycleFactory;
