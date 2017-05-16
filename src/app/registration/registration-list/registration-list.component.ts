import {Component, OnInit} from '@angular/core';
import {Registration} from '../../shared/registration.model';
import {Guild} from '../../shared/guild.model';
import {Volunteer} from '../../shared/volunteer.model';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  registrations: Registration[] = [
    new Registration(4, 10, Date.now().toString(), true, false, new Guild('Laug 1'), new Volunteer('peter', 'jensen', 5, [new Guild('test')])),
    new Registration(4, 10, Date.now().toString(), true, false, new Guild('Laug 1'), new Volunteer('peter', 'jensen', 5, [new Guild('test')])),
    new Registration(4, 10, Date.now().toString(), true, false, new Guild('Laug 1'), new Volunteer('peter', 'jensen', 5, [new Guild('test')])),
    new Registration(4, 10, Date.now().toString(), true, false, new Guild('Laug 1'), new Volunteer('peter', 'jensen', 5, [new Guild('test')])),
    new Registration(4, 10, Date.now().toString(), true, false, new Guild('Laug 1'), new Volunteer('peter', 'jensen', 5, [new Guild('test')])),
    new Registration(4, 10, Date.now().toString(), true, false, new Guild('Laug 1'), new Volunteer('peter', 'jensen', 5, [new Guild('test')]))
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
