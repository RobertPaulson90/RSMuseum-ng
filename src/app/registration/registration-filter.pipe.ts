import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registrationFilterByVolunteerName'
})
export class RegistrationFilterByVolunteerNamePipe implements PipeTransform {

  transform(value: any[], filterBy: string): any {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    return filterBy ? value.filter((data) => ((data.volunteer.firstName.toLowerCase() + ' ' + data.volunteer.lastName.toLowerCase()).indexOf(filterBy) != -1)) : value;
  }

}
