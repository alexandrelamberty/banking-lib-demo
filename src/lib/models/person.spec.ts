import test from 'ava';

import { Person } from './person';

test('create an instance of a Person with the correct lastName', (t) => {
  const person = new Person('Doe', 'John', new Date('1988-05-12'));
  t.is(person.lastName, 'Doe');
});

test('create an instance of a Person with the correct firstName', (t) => {
  const person = new Person('Doe', 'John', new Date('1988-05-12'));
  t.is(person.firstName, 'John');
});

test('create an instance of a Person with the correct dateOfBirth', async (t) => {
  const { dateOfBirth } = new Person('Doe', 'John', new Date('1988-05-12'));
  t.deepEqual(
    dateOfBirth.toString().length,
    new Date('1988-05-12').toString().length
  );
});
