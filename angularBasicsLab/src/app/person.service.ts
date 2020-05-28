import { Injectable, OnInit } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private peopleArray: Person[] = [
    new Person('Cherish', 'Moore', '23'),
    new Person('Javana', 'Johnson', '1'),
    new Person('Ryan', 'Long', '33'),
  ];

  constructor() {}

  getPeople(): Person[] {
    return this.peopleArray;
  }
}
