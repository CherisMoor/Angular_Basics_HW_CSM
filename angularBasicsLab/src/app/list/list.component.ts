import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  get dataList(): Person[] {
    return this.personService.getPeople();
  }
}
