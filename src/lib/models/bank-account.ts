import { Person } from './person';

export abstract class BankAccount {
  accountNumber: string;
  _balance = 0;

  private _holder: Person;

  constructor(accountNumber: string, holder: Person) {
    if (!accountNumber) throw Error('Account number cannot be empty.');
    this.accountNumber = accountNumber;
    this._holder = holder;
  }

  public set holder(person: Person) {
    this._holder = person;
  }

  public get holder(): Person {
    return this._holder;
  }

  public get balance(): number {
    return this._balance;
  }
}
