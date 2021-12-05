import DeviceImplemetation from '../device/device-implementation';

class RemoteControl {
  constructor(protected readonly device: DeviceImplemetation) {}

  public togglePower(): void {
    this.device.setPower(!this.device.getPower());

    console.log(
      this.device.getName(),
      'está',
      this.device.getPower() ? 'ligada' : 'desligada'
    );
  }
}

export default RemoteControl;
