import RemoteControl from './remote-control';
import DeviceImplemetation from '../device/device-implementation';

class RemoteControlWithVolume extends RemoteControl {
  constructor(protected readonly device: DeviceImplemetation) {
    super(device);
  }

  public volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume + 10);

    console.log(
      'O volume estava em',
      oldVolume,
      ', agora está em',
      this.device.getVolume()
    );
  }

  public volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume - 10);

    console.log(
      'O volume estava em',
      oldVolume,
      ', agora está em',
      this.device.getVolume()
    );
  }
}

export default RemoteControlWithVolume;
