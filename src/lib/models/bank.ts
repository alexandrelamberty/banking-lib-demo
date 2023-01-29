import { BankAccount } from './bank-account';
import { Person } from './person';

export class Bank {
  test: string;
  name: string;
  accounts: BankAccount[] = [];

  constructor(name: string) {
    if (!name) throw Error('The name of the bank cannot be empty.');
    this.name = name;
  }

  /**
   * Retrieve an account by his account number
   */
  account(number: string): BankAccount {
    const bankAccount = this.accounts.find(
      (account: BankAccount) => account.accountNumber === number
    );
    if (!bankAccount) throw Error('No account found with this account number.');
    return bankAccount;
  }

  /**
   * Add a bank account
   */
  addAccount(account: BankAccount) {
    this.accounts.push(account);
  }

  /**
   * Retrieve the sum of all positive balance from the user bank accounts.
   */
  accountHoldings(person: Person) {
    return this.accounts
      .filter(
        (account: BankAccount) =>
          account.balance > -1 && account.holder == person
      )
      .reduce(function (accumulator, curValue: BankAccount) {
        return accumulator + curValue.balance;
      }, 0);
  }
}
