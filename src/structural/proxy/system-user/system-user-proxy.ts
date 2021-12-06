import AdminUser from './admin-user';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAddres: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  public async getAddress(): Promise<SystemUserAddressProtocol[]> {
    if (this.realUserAddres === null) {
      const user = this.createUser();
      this.realUserAddres = await user.getAddress();
    }

    return this.realUserAddres;
  }
}

export default SystemUserProxy;
