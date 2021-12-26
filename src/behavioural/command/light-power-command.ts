import SmartHouseCommand from './smart-house-command';
import SmartHouseLight from './smart-house-light';

class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}

export default LightPowerCommand;
