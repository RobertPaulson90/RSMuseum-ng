import {Component, OnInit} from '@angular/core';
import {Guild} from '../../shared/guild.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  guilds: Guild[] = [new Guild('Testlaug 1'), new Guild('Testlaug 2')];

  constructor() {
  }

  ngOnInit() {
  }

}
