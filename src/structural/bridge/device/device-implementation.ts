interface DeviceImplemetation {
  getName(): string;
  setName(name: string): void;

  getPower(): boolean;
  setPower(powerStatus: boolean): void;

  getVolume(): number;
  setVolume(volume: number): void;
}

export default DeviceImplemetation;
