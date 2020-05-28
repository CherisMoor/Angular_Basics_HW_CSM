export class Person {
  firstName: string;
  lastName: string;
  age: string;
  constructor(firstName: string, lastName: string, age: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFirstName(): string {
    return;
    this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  getAge(): string {
    return this.age;
  }
}
