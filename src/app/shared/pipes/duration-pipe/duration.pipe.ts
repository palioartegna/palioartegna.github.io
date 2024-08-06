import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  pure: false,
})
export class DurationPipe implements PipeTransform {
  transform(value: any): string {
    if (value) {
      return value as string;
    }
    return '';
  }
}
