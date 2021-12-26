import SmartHouseCommand from './smart-house-command';
import SmartHouseLight from './smart-house-light';

class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  public execute(): void {
    const intensity = this.light.increaseIntensity();

    console.log('Intensidade de', this.light.name, 'é', intensity);
  }

  public undo(): void {
    const intensity = this.light.decreaseIntensity();

    console.log('Intensidade de', this.light.name, 'é', intensity);
  }
}

export default LightIntensityCommand;
