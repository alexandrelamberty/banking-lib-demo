import test from 'ava';

import { CurrentAccount } from './current-account';
import { Person } from './person';

test.before((t) => {
  const person = new Person('Doe', 'John', new Date('1988-05-12'));
  t.context = person;
});

test('create an instance of a CurrentAccount with an incorrect account number', (t) => {
  try {
    new CurrentAccount('', t.context as Person);
  } catch (e: any) {
    t.is(e.message, 'Account number cannot be empty.');
  }
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
  try {
    account.creditLine = -1;
  } catch (e: any) {
    t.is(e.message, 'Credit line amount must be positive.');
  }
});
