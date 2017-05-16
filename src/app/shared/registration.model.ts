import {Guild} from './guild.model';
import {Volunteer} from './volunteer.model';
export class Registration {
  constructor(public registrationId: number,
              public hours: number,
              public date: string,
              public approved: boolean,
              public processed: boolean,
              public guild: Guild,
              public volunteer: Volunteer) {
  }
}

