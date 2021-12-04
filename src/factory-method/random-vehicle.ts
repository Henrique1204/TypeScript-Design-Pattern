import Vehicle from './vehicle';

import CarFactory from './car-factory';
import BicycleFactory from './bicycle-factory';

import randomNumber from './random-number';

const randomVehicle = (): Vehicle => {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const fusca = carFactory.getVehicle('Fusca');
  const gol = carFactory.getVehicle('Gol');
  const peugeot = carFactory.getVehicle('Peugeot');

  const blueBicycle = bicycleFactory.getVehicle('Bicicleta Azul');
  const redBicycle = bicycleFactory.getVehicle('Bicicleta Vermelha');

  switch (randomNumber(5, 1)) {
    case 1:
      return fusca;
    case 2:
      return gol;
    case 3:
      return peugeot;
    case 4:
      return blueBicycle;
    default:
      return redBicycle;
  }
};

export default randomVehicle;
