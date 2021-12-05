import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static getInstance(): MyDatabaseClassic {
    if (!MyDatabaseClassic.instance) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
  }

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    this.users.forEach((user) => console.log(user));
  }
}

const db1 = MyDatabaseClassic.getInstance();
db1.add({ name: 'Paulo', age: 19 });

const db2 = MyDatabaseClassic.getInstance();
db2.show();

console.log(db1 === db2);
