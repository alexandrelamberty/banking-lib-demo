/**
 * Represent a Person, a customer of the bank
 */
export class Person {
  /**
   * The person's last name
   */
  lastName: string;
  /**
   * The person's first name
   */
  firstName: string;
  /**
   * The person's date of birth
   */
  dateOfBirth: Date;

  /**
   * Constructor for the Person class
   * @param lastName - The person's last name
   * @param firstName - The person's first name
   * @param dateOfBirth - The person's date of birth
   */
  constructor(lastName: string, firstName: string, dateOfBirth: Date) {
    // FIXME: initialize in constructor
    this.lastName = lastName;
    this.firstName = firstName;
    this.dateOfBirth = dateOfBirth;
  }
}
