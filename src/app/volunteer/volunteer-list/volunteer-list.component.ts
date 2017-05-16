import {Component, OnInit} from '@angular/core';
import {Volunteer} from '../../shared/volunteer.model';
import {Guild} from '../../shared/guild.model';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})

export class VolunteerListComponent implements OnInit {
  volunteers: Volunteer[] = [new Volunteer('lars', 'larsen', 4, [new Guild('Laug 1'), new Guild('sds 2')]),
    new Volunteer('lars', 'larsen', 4, [new Guild('Laug 1'), new Guild('sds 2')]),
    new Volunteer('lars', 'larsen', 4, [new Guild('Laug 1'), new Guild('sds 2')]),
    new Volunteer('lars', 'larsen', 4, [new Guild('Laug 1'), new Guild('sds 2')]),
    new Volunteer('lars', 'larsen', 4, [new Guild('Laug 1'), new Guild('sds 2')]),
    new Volunteer('lars', 'larsen', 4, [new Guild('Laug 1'), new Guild('sds 2')]),
    new Volunteer('lars', 'larsen', 4, [new Guild('Laug 1'), new Guild('sds 2')]),
    new Volunteer('lars', 'larsen', 4, [new Guild('Laug 1'), new Guild('sds 2')])];


  constructor() {
  }

  ngOnInit() {
  }

}
