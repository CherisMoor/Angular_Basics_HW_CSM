import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
})
export class CompOneComponent implements OnInit {
  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  get dataList(): Person[] {
    return this.personService.getPeople();
  }
}
