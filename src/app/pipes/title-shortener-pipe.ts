
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleShortener',
})
export class TitleShortenerPipe implements PipeTransform {

  transform(value: string, limit: number = 15): string {
    if (!value) {
      return '';
    }

    if (value.length > limit) {
      return value.slice(0, limit) + '...';
    }

    return value;
  }
}
