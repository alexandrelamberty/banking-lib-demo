/**
 * Represent a customer of the bank
 */
export class Person {
  lastName: string;
  firstName: string;
  dateOfBirth: Date;

  constructor(lastName: string, firstName: string, dateOfBirth: Date) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.dateOfBirth = dateOfBirth;
  }
}
