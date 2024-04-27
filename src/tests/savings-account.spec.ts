import test from 'ava';

import { Person } from '../lib/models/person';
import { SavingsAccount } from '../lib/models/savings-account';

test.before((t) => {
  const person = new Person('Doe', 'John', new Date('1988-05-12'));
  t.context = person;
});

test('create an instance of a SavingsAccount with an incorrect account number', (t) => {
  try {
    new SavingsAccount('', t.context as Person);
  } catch (e: unknown) {
    if (e instanceof Error) {
      t.is(e.message, 'Account number cannot be empty.');
    }
  }
});

test('create an instance of a SavingsAccount with the correct account number', (t) => {
  const account = new SavingsAccount('000-111', t.context as Person);
  t.is(account.accountNumber, '000-111');
});

test('create an instance of a SavingsAccount with an incorrect deposit', (t) => {
  const account = new SavingsAccount('000-111', t.context as Person);
  try {
    account.deposit(-1);
  } catch (e: unknown) {
    if (e instanceof Error) {
      t.is(e.message, 'Deposit amount must be positive.');
    }
  }
});

test('create an instance of a SavingsAccount with a correct deposit a withdrawal ', (t) => {
  const account = new SavingsAccount('000-111', t.context as Person);
  account.deposit(100);
  t.is(account.balance, 100);
});

test('create an instance of a SavingsAccount and make a correct withdrawal', (t) => {
  const account = new SavingsAccount('000-111', t.context as Person);
  account.deposit(10);
  account.withdrawal(10);
  t.is(account.balance, 0);
});

test('create an instance of a SavingsAccount and make an incorrect withdrawal', (t) => {
  const account = new SavingsAccount('000-111', t.context as Person);
  try {
    account.withdrawal(-1);
  } catch (e: unknown) {
    if (e instanceof Error) {
      t.is(e.message, 'Withdrawal amount must be positive.');
    }
  }
});

test('create an instance of a SavingsAccount and make a withdrawal that exceed the limit', (t) => {
  const account = new SavingsAccount('000-111', t.context as Person);
  try {
    account.withdrawal(100);
  } catch (e: unknown) {
    if (e instanceof Error) {
      t.is(e.message, 'Your withdrawal exceeds the authorized limit.');
    }
  }
});
