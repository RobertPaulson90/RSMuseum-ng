import {Component, OnInit} from '@angular/core';
import {Guild} from '../../shared/guild.model';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../../shared/registration.service';
import {Registration} from '../../shared/registration.model';
import {Volunteer} from '../../shared/volunteer.model';
import {Observable} from 'rxjs/Observable';
import {VolunteerService} from '../../volunteer/volunteer.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  guilds: Guild[] = [];
  registrationForm: FormGroup;
  dateSelected: Date;
  addRegistrationStatus = true;
  addRegistrationMessage = 'test';
  requestWasSuccesfull: boolean;
  private timer;


  constructor(private registrationService: RegistrationService, private volunteerService: VolunteerService) {
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'membershipNumber': new FormControl(null, [Validators.required], [this.checkMembershipNumber.bind(this)]),
      'hours': new FormControl(null, Validators.required),
      'guild': new FormControl(null, Validators.required),
    });

    this.registrationService.getGuilds()
      .subscribe(
        (guilds) => this.guilds = guilds,
        (error) => console.log(error),
        () => console.log(this.guilds)
      );
  }

  onSubmit() {
    console.log(this.registrationForm);
    const volunteerId = this.registrationForm.get('membershipNumber').value;
    const hours = this.registrationForm.get('hours').value;
    const guildId = this.registrationForm.get('guild').value.GuildId;
    const registration = new Registration(hours, this.dateSelected.toDateString(), guildId, volunteerId);

    this.registrationService.addRegistration(registration).subscribe(
      (success) => this.displayMessage('Din registrering er blevet behandlet, tusind tak for din indsats', true),
      (error) => this.displayMessage('Hov, der opstod en fejl', false),
      () => console.log('registrationService.addRegistration() complete')
    );
    this.registrationForm.reset();
  }

  onDateSelected(event: Date) {
    this.dateSelected = event;
  }

  validateForm() {
    if (this.registrationForm.valid && (typeof this.dateSelected !== 'undefined')) {
      return true;
    } else {
      return false;
    }
  }

  displayMessage(message: string, status: boolean) {
    this.requestWasSuccesfull = status;
    this.addRegistrationStatus = false;
    this.addRegistrationMessage = message;
    setTimeout(() => {
      this.addRegistrationStatus = true;
    }, 4000);
  }

  checkMembershipNumber(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (control.value > 999 && control.value < 10000) {
        this.volunteerService.getVolunteersById(control.value)
          .subscribe(
            (success) => resolve(null),
            (error) => resolve({'checkMembershipNumber': true}),
            () => console.log('done')
          );
      }
    });
    return promise;
  }
}
