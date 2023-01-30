import { BankAccount } from './bank-account';
import { Person } from './person';

/**
 * Class representing a CurrentAccount
 * @extends BankAccount
 */
export class CurrentAccount extends BankAccount {
  /**
   * Credit Line of the account
   * @private
   */
  private _creditLine = 0;

  /**
   * Creates an instance of CurrentAccount.
   * @param accountNumber - The account number
   * @param holder - The account holder
   */
  constructor(accountNumber: string, holder: Person) {
    super(accountNumber, holder);
  }

  /**
   * Set Credit Line for the account
   * @param  amount - Amount for Credit Line
   * @throws - Credit line amount must be positive
   */
  public set creditLine(amount: number) {
    if (amount <= 0) throw Error('Credit line amount must be positive.');
    this._creditLine = amount;
  }

  /**
   * Get Credit Line of the account
   * @returns {number} - Credit Line of the account
   */
  public get creditLine(): number {
    return this._creditLine;
  }

  /**
   * Perform withdrawal on the account
   * @param amount - The amount to withdraw
   * @throws - Withdrawal amount must be positive
   * @throws - Your withdrawal exceeds the authorized limit
   */
  withdrawal(amount: number): void {
    if (amount >= 0) {
      const withdrawalTransaction = this._balance - amount;
      if (withdrawalTransaction < 0) {
        if (Math.abs(withdrawalTransaction) > this._creditLine) {
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
