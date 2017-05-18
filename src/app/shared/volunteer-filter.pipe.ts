import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volunteerFilterByName'
})
export class VolunteerFilterByNamePipe implements PipeTransform {

  transform(value: any[], filterBy: string): any {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    return filterBy ? value.filter((data) => ((data.firstName.toLowerCase() + ' ' + data.lastName.toLowerCase()).indexOf(filterBy) != -1)) : value;
  }

}
