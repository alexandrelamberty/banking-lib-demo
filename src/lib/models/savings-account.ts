import { BankAccount } from './bank-account';
import { Person } from './person';

/**
 * Class representing a SavingsAccount
 * @extends BankAccount
 */
export class SavingsAccount extends BankAccount {
  private _lastWithdrawal: Date;

  /**
   * Creates a new instance of SavingsAccount
   * @param accountNumber - The account number
   * @param holder - The account holder
   */
  constructor(accountNumber: string, holder: Person) {
    super(accountNumber, holder);
  }

  /**
   * Gets the date of the last withdrawal
   * @returns The date of the last withdrawal
   */
  public get lastWithdrawal(): Date {
    return this._lastWithdrawal;
  }
  /**
   * Perform withdrawal on the account
   * @param amount - The amount to withdraw
   * @throws If the withdrawal amount is negative or exceeds the authorized limit
   */
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
      throw Error('Withdrawal amount must be positive.');
    }
  }

  /**
   * Calculates bank account interests at a rate of 3%.
   */
  applyInterests() {
    const interests = (this.balance / 100) * 3;
    this.deposit(interests);
  }
}
