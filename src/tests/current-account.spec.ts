import test from 'ava';

import { CurrentAccount } from '../lib/models/current-account';
import { Person } from '../lib/models/person';

test.before((t) => {
  const person = new Person('Doe', 'John', new Date('1988-05-12'));
  t.context = person;
});

test('create an instance of a CurrentAccount with an incorrect account number', (t) => {
  t.throws(
    () => {
      new CurrentAccount('', t.context as Person);
    },
    { instanceOf: Error, message: 'Account number cannot be empty.' }
  );
});

test('create an instance of a CurrentAccount with the correct account number', (t) => {
  const account = new CurrentAccount('000-111', t.context as Person);
  t.is(account.accountNumber, '000-111');
});

test('create an instance of a CurrentAccount with a correct credit line', (t) => {
  const account = new CurrentAccount('000-111', t.context as Person);
  account.creditLine = 100;
  t.is(account.creditLine, 100);
});

test('create an instance of a CurrentAccount with an incorrect credit line', (t) => {
  const account = new CurrentAccount('000-111', t.context as Person);
  t.throws(
    () => {
      account.creditLine = -1;
    },
    { instanceOf: Error, message: 'Credit line amount must be positive.' }
  );
});

test('create an instance of a CurrentAccount with an incorrect deposit', (t) => {
  const account = new CurrentAccount('000-111', t.context as Person);
  t.throws(
    () => {
      account.deposit(-1);
    },
    { instanceOf: Error, message: 'Deposit amount must be positive.' }
  );
});

test('create an instance of a CurrentAccount with a correct deposit', (t) => {
  const account = new CurrentAccount('000-111', t.context as Person);
  account.deposit(100);
  t.is(account.balance, 100);
});

test('create an instance of a CurrentAccount and make a correct withdrawal', (t) => {
  const account = new CurrentAccount('000-111', t.context as Person);
  account.deposit(10);
  account.withdrawal(10);
  t.is(account.balance, 0);
});

test('create an instance of a CurrentAccount and make an incorrect withdrawal', (t) => {
  const account = new CurrentAccount('000-111', t.context as Person);
  t.throws(
    () => {
      account.withdrawal(-1);
    },
    { instanceOf: Error, message: 'Withdrawal amount must be positive.' }
  );
});
