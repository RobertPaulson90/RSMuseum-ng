import {Guild} from './guild.model';
import {Volunteer} from './volunteer.model';

export class GuildStatistics {
  constructor(
    public GuildId: number,
    public GuildName: string,
    public Stats: Stat[]
    ) { }
}

export class Stat {
  constructor(
    public Date: Date,
    public TotalHours: number,
    public TotalPeople: number
  ) { }
}
