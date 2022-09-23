import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changecaracter'
})
export class ChangecaracterPipe implements PipeTransform {

  transform(value: string, ): string {
    
    value = value.replace(/(a)/,"4");
    value = value.replace('e','3');
    return value;
  }

}
