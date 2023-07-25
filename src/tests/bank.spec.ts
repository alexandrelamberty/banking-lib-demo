import test from 'ava';

import { Bank } from '../lib/models/bank';
import { CurrentAccount } from '../lib/models/current-account';
import { Person } from '../lib/models/person';
import { SavingsAccount } from '../lib/models/savings-account';

test('create an instance of a Bank with a correct name', (t) => {
  const bank = new Bank('Test bank');
  t.is(bank.name, 'Test bank');
});

test('create an instance of a Bank with an incorrect name', (t) => {
  t.throws(
    () => {
      new Bank('');
    },
    { instanceOf: Error, message: 'The name of the bank cannot be empty.' }
  );

  // try {
  //   new Bank('');
  // } catch (e: unknown) {
  //   if (e instanceof Error) {
  //     t.is(e.message, 'The name of the bank cannot be empty.');
  //   }
  // }
});

test('create an instance of a Bank and add an account', (t) => {
  const person: any = {}; //new Person('Doe', 'John', new Date('1983-12-05'));
  const account = new CurrentAccount('111-221', person);
  const bank = new Bank('Test bank');
  bank.addAccount(account);
  t.is(bank.accounts.length, 1);
});

test('create an instance of a Bank and add an account then remove it', (t) => {
  const person = new Person('Doe', 'John', new Date('1983-12-05'));
  const account = new CurrentAccount('111-221', person);
  const bank = new Bank('Test bank');
  bank.addAccount(account);
  bank.removeAccount(account);
  t.is(bank.accounts.length, 0);
});

test('create an instance of a Bank with accounts then remove an inexistent account', (t) => {
  const person = new Person('Doe', 'John', new Date('1983-12-05'));
  const account = new CurrentAccount('111-221', person);
  const accountNotInTheBank = new CurrentAccount('111-223', person);
  const bank = new Bank('Test bank');
  bank.addAccount(account);
  t.throws(
    () => {
      bank.removeAccount(accountNotInTheBank);
    },
    { instanceOf: Error, message: 'Account with this number not found' }
  );
});

test('create an instance of a Bank with accounts and calculate interests', (t) => {
  const person = new Person('Doe', 'John', new Date('1983-12-05'));

  const account1 = new CurrentAccount('111-221', person);
  account1.deposit(20);

  const account2 = new CurrentAccount('111-223', person);
  account2.deposit(50);

  const account3 = new SavingsAccount('222-223', person);
  account3.deposit(20);

  const bank = new Bank('Test bank');
  bank.addAccount(account1);
  bank.addAccount(account2);
  bank.addAccount(account3);
  bank.interestCalculations();

  // Current account 20 + 1,5 %
  t.is(account1.balance, 20.3);

  // Current account 50 + 1,5 %
  t.is(account2.balance, 50.75);

  // Savings account 20 + 3 %
  t.is(account3.balance, 20.6);
});
