import Vehicle from './vehicle';

abstract class VehicleFactory {
  // Factory Method
  public abstract getVehicle(vehicleName: string): Vehicle;

  public pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);

    car.pickUp(customerName);

    return car;
  }
}

export default VehicleFactory;
