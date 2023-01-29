import { BankAccount } from './bank-account';
import { Person } from './person';

export class SavingsAccount extends BankAccount {
  private _lastWithdrawal: Date;

  constructor(accountNumber: string, holder: Person) {
    super(accountNumber, holder);
  }

  public get lastWithdrawal(): Date {
    return this._lastWithdrawal;
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
        throw Error('Your withdrawal exceeds the authorized limit.');
      } else {
        this._balance = withdrawalTransaction;
        this._lastWithdrawal = new Date();
      }
    } else {
      throw Error('Amount must be positive.');
    }
  }
}
