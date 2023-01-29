import { BankAccount } from './bank-account';
import { CurrentAccount } from './current-account';
import { Person } from './person';
import { SavingsAccount } from './savings-account';

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
  addAccount(account: BankAccount): void {
    this.accounts.push(account);
  }

  /**
   * Retrieve the sum of all positive balance from the user bank accounts.
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
