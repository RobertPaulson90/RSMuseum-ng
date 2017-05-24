import {Guild} from './guild.model';
import {Volunteer} from './volunteer.model';

export class GuildStatistics {
  constructor(
    public Stats: Stat[],
    public GuildId: number,
    public GuildName: string
    ) { }
}

export class Stat {
  constructor(
    public Date: Date,
    public TotalHours: number,
    public TotalPeople: number
  ) { }
}
