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

  handleRegistration(id: number, approved: boolean) {


    if (approved) {
      return this.http.get('http://rsmuseummvc.azurewebsites.net/api/HandleRegistrations/' + id + '/true/')
        .map(
          (response: Response) => {
            this.findIndexOfRegistrationsAndRemove(id);
            return this.registrations;
          }
        );
    } else {
      return this.http.get('http://rsmuseummvc.azurewebsites.net/api/HandleRegistrations/' + id + '/false/')
        .map(
          (response: Response) => {
            this.findIndexOfRegistrationsAndRemove(id);
            return this.registrations;
          }
        );
    }
  }

  findIndexOfRegistrationsAndRemove(id: number) {
    for (let i = 0; i <= this.registrations.length; i++) {
      if (this.registrations[i].RegistrationId === id) {
        this.registrations.splice(i, 1);
        break;
      }
    }
  }
}



