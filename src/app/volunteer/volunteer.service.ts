import {Injectable} from '@angular/core';
import {Volunteer} from '../shared/volunteer.model';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class VolunteerService {
  volunteers: Volunteer[] = [];
  guildNames = '';

  constructor(private http: Http) {
  }

  getVolunteers() {
    return this.http.get('http://rsmuseummvc.azurewebsites.net/api/GetVolunteers')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const volunteer of data) {
            for (const guildName of volunteer.GuildName) {
              this.guildNames += guildName + ' ';
            }
            this.volunteers.push(new Volunteer(
              volunteer.FirstName,
              volunteer.LastName,
              volunteer.MembershipNumber,
              this.guildNames));
            this.guildNames = '';
          }
          return this.volunteers;
        }
      );
  }
}



