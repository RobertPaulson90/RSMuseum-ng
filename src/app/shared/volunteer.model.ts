import {Guild} from './guild.model';
export class Volunteer {
  constructor(public firstName: string, public lastName: string, public membershipNumber: number, public guildNames?: string) {
  }
}
