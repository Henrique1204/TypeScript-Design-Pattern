import DeliveryFliweight from './delivery-flyweight';
import DeliveryLocation from './delivery-location';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLowerCase())
      .join('_');
  }

  public makeLocation(intrinsicState: DeliveryLocationData): DeliveryFliweight {
    const key = this.createId(intrinsicState);

    if (key in this.locations) return this.locations[key];

    this.locations[key] = new DeliveryLocation(intrinsicState);

    return this.locations[key];
  }

  public getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}

export default DeliveryFactory;
