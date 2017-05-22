import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Guild} from './guild.model';
import {Registration} from './registration.model';

@Injectable()
export class RegistrationService {
  private guilds: Guild[] = [];

  constructor(private http: Http) {
  }

  getGuilds() {
    return this.http.get('http://rsmuseummvc.azurewebsites.net/api/GetGuilds')
      .map(
        (response: Response) => {
          const data: Guild[] = response.json();
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
}



