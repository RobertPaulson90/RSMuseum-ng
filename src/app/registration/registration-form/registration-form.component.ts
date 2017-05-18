import {Component, OnInit} from '@angular/core';
import {Guild} from '../../shared/guild.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../../shared/registration.service';
import {Registration} from '../../shared/registration.model';
import {Volunteer} from '../../shared/volunteer.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  guilds: Guild[] = [];
  registrationForm: FormGroup;
  dateSelected: Date;
  private selectedGuild;


  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'membershipNumber': new FormControl(null, Validators.required),
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
    const volunteerId = this.registrationForm.get('membershipNumber').value;
    const hours = this.registrationForm.get('hours').value;
    const guildId = this.registrationForm.get('guild').value.GuildId;
    const registration = new Registration(hours, this.dateSelected.toDateString(), guildId, volunteerId);

    this.registrationService.addRegistration(registration).subscribe(
      (error) => console.log(error),
      () => console.log('registrationService.addRegistration() complete')
    );
    ;
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
}
