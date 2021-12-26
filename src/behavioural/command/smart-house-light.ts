class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  public getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  public on(): boolean {
    this.isOn = true;

    console.log(this.name, 'agora está', this.getPowerStatus());

    return this.isOn;
  }

  public off(): boolean {
    this.isOn = false;

    console.log(this.name, 'agora está', this.getPowerStatus());

    return this.isOn;
  }

  public increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;

    this.intensity += 1;
    return this.intensity;
  }

  public decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;

    this.intensity -= 1;
    return this.intensity;
  }
}

export default SmartHouseLight;
