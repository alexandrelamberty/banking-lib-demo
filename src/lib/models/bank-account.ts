import { Person } from './person';

/**
 * Abstract class representing a bank account.
 * @abstract
 */
export abstract class BankAccount {
  /**
   * The account number of the bank account.
   */
  accountNumber: string;

  /**
   * The balance of the bank account.
   * @protected
   */
  protected _balance = 0;

  /**
   * The holder of the bank account.
   * @protected
   */
  protected _holder: Person;

  /**
   * Creates a new instance of the `BankAccount` class.
   * @param accountNumber - The account number of the bank account.
   * @param  holder - The holder of the bank account.
   * @throws - Account number cannot be empty.
   */
  constructor(accountNumber: string, holder: Person) {
    if (!accountNumber) throw Error('Account number cannot be empty.');
    this.accountNumber = accountNumber;
    this._holder = holder;
  }

  /**
   * Sets the holder of the bank account.
   * @param  person - The new holder of the bank account.
   */
  public set holder(person: Person) {
    this._holder = person;
  }

  /**
   * Gets the holder of the bank account.
   * @returns {Person} - The holder of the bank account.
   */
  public get holder(): Person {
    return this._holder;
  }

  /**
   * Gets the balance of the bank account.
   * @returns {number} - The balance of the bank account.
   */
  public get balance(): number {
    return this._balance;
  }

  /**
   * Deposits an amount to the bank account.
   * @param {number} amount - The amount to be deposited.
   */
  deposit(amount: number): void {
    if (amount < 0) throw Error('Deposit amount must be positive.');
    this._balance = this._balance + amount;
  }

  applyInterests() {
    // method implement in child classes
  }
}
