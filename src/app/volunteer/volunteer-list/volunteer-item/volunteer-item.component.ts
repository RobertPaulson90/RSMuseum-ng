import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Volunteer} from '../../../shared/volunteer.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-volunteer-item',
  templateUrl: './volunteer-item.component.html',
  styleUrls: ['./volunteer-item.component.css']
})
export class VolunteerItemComponent implements OnInit {
  volunteer: Volunteer;
  volunteerMembershipNumber: number;
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.volunteerMembershipNumber = this.route.snapshot.params['id'];
    console.log('VolunteerItem got number:' + this.volunteerMembershipNumber);

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.volunteerMembershipNumber = params['id'];
        }
      );

    // Call VolunteerService method to getvolunteerBymembershipNumber and pass in the volunteerMembershipNumber
  }

}
