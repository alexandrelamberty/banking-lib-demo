import test from 'ava';

import { Bank } from '../lib/models/bank';

test('create an instance of a Bank', (t) => {
  const bank = new Bank('Test bank');
  t.is(bank.name, 'Test bank');
});
