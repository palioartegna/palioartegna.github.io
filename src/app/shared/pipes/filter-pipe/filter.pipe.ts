import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pbFilter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(
    items: any[],
    filter: {
      predicate: (value: any, index?: number, array?: any[]) => unknown;
      thisArg?: any;
    }
  ): any {
    return items.filter(filter.predicate, filter.thisArg);
  }

  // transform(items: any[], predicate: (value: any, index?: number, array?: any[]) => unknown): any {
  //   return items.filter(predicate)
  // }
}
