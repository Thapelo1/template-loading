import {Component, Input, OnInit} from '@angular/core';
import { User, Person } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() person!: Person;

  constructor() { }

  ngOnInit(): void {

  }

}
