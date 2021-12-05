import DeviceImplemetation from './device-implementation';

class Radio implements DeviceImplemetation {
  constructor(
    private name: string = 'Radio',
    private volume: number = 10,
    private powerStatus: boolean = false
  ) {}

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPower(): boolean {
    return this.powerStatus;
  }

  public setPower(powerStatus: boolean): void {
    this.powerStatus = powerStatus;
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(volume: number): void {
    this.volume = this.volume > 0 && this.volume <= 100 ? volume : this.volume;
  }
}

export default Radio;
