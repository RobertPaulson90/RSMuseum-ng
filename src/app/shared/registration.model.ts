import {Guild} from './guild.model';
import {Volunteer} from './volunteer.model';
export class Registration {
  constructor(
              public Hours: number,
              public Date: string,
              public GuildId: number,
              public VolunteerId: number,
              public Processed?: boolean,
              public RegistrationId?: number,
              public Approved?: boolean,
  ) {
  }
}

