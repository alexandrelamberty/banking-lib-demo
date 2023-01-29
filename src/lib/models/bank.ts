import { BankAccount } from './bank-account';
import { Person } from './person';

export class Bank {
  name: string;
  accounts: BankAccount[] = [];

  constructor(name: string) {
    if (!name) throw Error('The name of the bank cannot be empty');
    this.name = name;
  }

  /**
   * permet de récupérer un compte à l’aide du numéro de
compte de ce dernier
   */
  account(number: string) {
    console.log(number);
    //
  }

  /**
   * permet d’ajouter un compte à la liste des comptes
   */
  addAccount(account: BankAccount) {
    this.accounts.push(account);
  }

  /**
   * permet de connaître la somme des soldes positifs des comptes appartenant au titulaire)
   */
  accountHoldings(holder: Person) {
    console.log(holder);
    //
  }
}
