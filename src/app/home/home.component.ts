import { Component, OnInit } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {Person} from "../shared/interfaces/user.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person$: Observable<Person> = of({name: 'Thapelo'}).pipe(delay(1000));

  constructor() { }


  ngOnInit(): void {

  }

}
