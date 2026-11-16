
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreLabel',
})
export class GenreLabelPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    if (value === 'Action') {
      return 'Action Movie';
    }

    if (value === 'Comedy') {
      return 'Comedy Movie';
    }

    if (value === 'Horror') {
      return 'Horror Movie';
    }

    if (value === 'Drama') {
      return 'Drama Movie';
    }

    return value;
  }
}
