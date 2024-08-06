import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'pbSort',
   pure: false,
})
export class SortPipe implements PipeTransform {
   transform(items: any, sort: (a: any, b: any) => number): any {
      return items.sort(sort);
   }
}
