import { BankAccount } from './bank-account';
import { Person } from './person';

/**
 * Class representing a bank
 */
export class Bank {
  name: string;
  accounts: BankAccount[] = [];

  /**
   * Creates a bank instance
   * @param name - The name of the bank
   */
  constructor(name: string) {
    if (!name) throw Error('The name of the bank cannot be empty.');
    this.name = name;
  }

  /**
   * Retrieves an account by its account number
   * @param number - The account number of the account to retrieve
   * @returns - The bank account with the provided account number
   * @throws - Error if no account is found with the provided account number
   */
  account(number: string): BankAccount {
    const bankAccount = this.accounts.find(
      (account: BankAccount) => account.accountNumber === number
    );
    if (!bankAccount) throw Error('No account found with this account number.');
    return bankAccount;
  }

  /**
   * Adds a bank account to the bank
   * @param account - The bank account to add
   */
  addAccount(account: BankAccount): void {
    // FIXME: Check unique account number
    this.accounts.push(account);
  }

  /**
   * Remove a bank account to the bank
   * @param account - The bank account to remove
   */
  removeAccount(account: BankAccount): void {
    const result = this.accounts.filter(function (acc: BankAccount) {
      return acc.accountNumber == account.accountNumber;
    });
    if (result.length == 0) {
      throw new Error('Account with this number not found');
    } else {
      this.accounts.splice(this.accounts.indexOf(account));
    }
  }

  /**
   * Retrieves the sum of all positive balances from the user's bank accounts.
   * @param person - The person whose account holdings are to be retrieved
   * @returns The sum of all positive balances of the user's bank accounts
   */
  accountHoldings(person: Person): number {
    return this.accounts
      .filter(
        (account: BankAccount) =>
          account.balance > -1 && account.holder == person
      )
      .reduce(function (accumulator, curValue: BankAccount) {
        return accumulator + curValue.balance;
      }, 0);
  }

  /**
   * Calculates bank accounts interests.
   */
  interestCalculations(): void {
    this.accounts.forEach((account: BankAccount) => {
      account.applyInterests();
    });
  }
}
