import DeviceImplemetation from './device-implementation';

class Tv implements DeviceImplemetation {
  constructor(
    private name: string = 'Tv',
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
    this.volume = volume;
  }
}

export default Tv;
