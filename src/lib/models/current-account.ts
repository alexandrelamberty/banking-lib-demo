import { BankAccount } from './bank-account';
import { Person } from './person';

export class CurrentAccount extends BankAccount {
  private _creaditLine = 0;

  constructor(accountNumber: string, holder: Person) {
    super(accountNumber, holder);
  }

  public set creaditLine(amount: number) {
    if (amount <= 0) throw Error('Credit line amount must be positive.');
    this._creaditLine = amount;
  }

  public get creaditLine(): number {
    return this._creaditLine;
  }

  public get balance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw Error('Deposit amount must be positive.');
    this._balance = this._balance + amount;
  }

  withdrawal(amount: number): void {
    if (amount >= 0) {
      const withdrawalTransaction = this._balance - amount;
      if (withdrawalTransaction < 0) {
        if (Math.abs(withdrawalTransaction) > this._creaditLine) {
          throw Error('Your withdrawal exceeds the authorized limit.');
        } else {
          this._balance = withdrawalTransaction;
        }
      } else {
        this._balance = withdrawalTransaction;
      }
    } else {
      throw Error('Withdrawal amount must be positive.');
    }
  }
}
