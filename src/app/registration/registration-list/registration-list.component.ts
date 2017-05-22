import {Component, OnInit} from '@angular/core';
import {Registration} from '../../shared/registration.model';
import {RegistrationService} from '../../shared/registration.service';
import { trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css'],
  animations: [
    trigger('tableRowLeavAnimation', [
      transition(':leave', [
        group([
          animate('1s ease-in-out', style({
            transform: 'translateX(100%)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class RegistrationListComponent implements OnInit {
  searchString;
  registrations: Registration[] = [];
  loading = true;

  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.registrationService.getUnprocessedRegistrations()
      .subscribe(
        (registrations) => this.registrations = registrations,
        (error) => console.log(error),
        () => this.loading = false
      );
  }

  onSearchStringChanged(searchStrinng: string) {
    this.searchString = searchStrinng;
  }

  handleRegistration(index: number, approved: boolean) {
    console.log(this.registrations)
    this.registrationService.handleRegistration(index, approved)
      .subscribe(
        (registrations) => this.registrations = registrations,
        (error) => console.log(error),
        () => this.loading = false
      );

  }
}
