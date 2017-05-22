import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registrationFilterByVolunteerName'
})
export class RegistrationFilterByVolunteerNamePipe implements PipeTransform {

  transform(value: any[], filterBy: string): any {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    return filterBy ? value.filter((data) => ((data.Volunteer.FirstName.toLowerCase() + ' ' + data.Volunteer.LastName.toLowerCase()).indexOf(filterBy) != -1)) : value;
  }

}
