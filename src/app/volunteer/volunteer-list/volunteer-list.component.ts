import { Component, OnInit } from '@angular/core';
import {Volunteer} from '../../shared/volunteer.model';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})

export class VolunteerListComponent implements OnInit {
  private volunteers: Volunteer[];

  constructor() { }

  ngOnInit() {
  }

}
