import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Guild} from './guild.model';
import {Registration} from './registration.model';

@Injectable()
export class RegistrationService {
   guilds: Guild[] = [];
   registrations: Registration[] = [];

  constructor(private http: Http) {
  }

  getGuilds() {
    return this.http.get('http://rsmuseummvc.azurewebsites.net/api/GetGuilds')
      .map(
        (response: Response) => {
          const data: Guild[] = response.json();
          this.guilds = data;
          return data;
        }
      );
  }

  addRegistration(registration: Registration) {
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(
      'http://rsmuseummvc.azurewebsites.net/api/AddRegistration',
      registration,
      {headers: headers});
  }

  getUnprocessedRegistrations() {
    return this.http.get('http://rsmuseummvc.azurewebsites.net/api/GetRegistrations/true')
      .map(
        (response: Response) => {
          const data: Registration[] = response.json();
          this.registrations = data
          for (const registration of data) {
             registration.Date = registration.Date.substring(0, 10);
          }
          return data;
        }
      );
  }

  handleRegistration(index: number, approved: boolean) {
    const id = this.registrations[index].RegistrationId;
    if (approved) {
      return this.http.get('http://rsmuseummvc.azurewebsites.net/api/HandleRegistrations/' + id + '/true/')
        .map(
          (response: Response) => {
            this.registrations.splice(index, 1);
            return this.registrations;
          }
        );
    } else {
      return this.http.get('http://rsmuseummvc.azurewebsites.net/api/HandleRegistrations/' + id + '/false/')
        .map(
          (response: Response) => {
            this.registrations.splice(index, 1);
            return this.registrations;
          }
        );
    }
  }
}



