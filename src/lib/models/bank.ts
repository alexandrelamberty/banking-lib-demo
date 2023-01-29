import { BankAccount } from './bank-account';
import { CurrentAccount } from './current-account';
import { Person } from './person';
import { SavingsAccount } from './savings-account';

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
    this.accounts.push(account);
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
   * Calculates bank account interests.
   * For a SavingsAccount the interest rate is 3%.
   * For a CurrentAccount interest brings a gain of 1.5% on the balance if the
   * latter is positive, otherwise a debt of 4%.
   */
  interestCalculations(): void {
    this.accounts.forEach((account: BankAccount) => {
      if (account instanceof CurrentAccount) {
        // add 3% to the balance
        const interests = 0;
        account.deposit(interests);
      } else if (account instanceof SavingsAccount) {
        // add 1.5% if positive
        // substract 4% if negative
        const interests = 0;
        account.deposit(interests);
      }
    });
  }
}
