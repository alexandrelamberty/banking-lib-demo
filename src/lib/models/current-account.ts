import { BankAccount } from './bank-account';
import { Person } from './person';

export class CurrentAccount extends BankAccount {
  private _holder: Person;
  private _balance = 0;
  private _creaditLine: number;

  constructor(accountNumber: string) {
    super(accountNumber);
  }

  public get balance() {
    return this._balance;
  }

  public set holder(person: Person) {
    this._holder = person;
  }

  public get holder(): Person {
    return this._holder;
  }

  public set creaditLine(amount: number) {
    if (amount < 0) throw Error('Credit line must be positive!');
    this._creaditLine = amount;
  }

  public get creaditLine(): number {
    return this._creaditLine;
  }

  deposit(amount: number): void {
    if (amount < 0) throw Error('Deposit must be positive!');
    this._balance = this._balance + amount;
  }

  withdrawal(amount: number): void {
    if (amount > 0) {
      const withdrawalTransaction = this._balance - amount;
      // If the transaction result in a negative amount we check the credit line.
      if (withdrawalTransaction < 0) {
        if (Math.abs(withdrawalTransaction) > this._creaditLine) {
          throw Error('Withdrawal exceed the credit line!');
        } else {
          this._balance = withdrawalTransaction;
        }
      } else {
        this._balance = withdrawalTransaction;
      }
    } else {
      throw Error('Withdrawal must be positive!');
    }
  }
}
