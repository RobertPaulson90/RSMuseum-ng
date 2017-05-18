import {Component, OnInit} from '@angular/core';
import {Guild} from '../../shared/guild.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  guilds: Guild[] = [new Guild('Testlaug 1'), new Guild('Testlaug 2')];
  registrationForm: FormGroup;
  date: Date;

  constructor() {
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'membershipNumber': new FormControl(null, Validators.required),
      'hours': new FormControl(null, Validators.required),
      'guild': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.registrationForm);
  }

  dateSelected(event: Date) {
    this.date = event;
    console.log(this.date.toDateString());
  }
}
