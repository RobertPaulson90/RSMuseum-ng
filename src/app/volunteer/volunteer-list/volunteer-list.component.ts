import {Component, OnInit} from '@angular/core';
import {Volunteer} from '../../shared/volunteer.model';
import {Guild} from '../../shared/guild.model';
import {VolunteerService} from '../volunteer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})

export class VolunteerListComponent implements OnInit {
  volunteers: Volunteer[];
  loading = true;
  searchString = '';

  constructor(private volunteerService: VolunteerService, private router: Router) {
  }

  ngOnInit() {
    this.volunteerService.getVolunteers()
      .subscribe(
        (volunteers) => this.volunteers = volunteers,
        (error) => console.log(error),
        () => console.log(this.loading = false)
      );
  }

  onSearchStringChanged(searchStrinng: string) {
    this.searchString = searchStrinng;
  }
  redirectToVolunteer(membershipNumber: Number) {
    this.router.navigate(['/frivillige', membershipNumber]);
  }
}
