import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pbMap',
  pure: false,
})
export class MapPipe implements PipeTransform {
  transform(items: any, map: { callbackFn: (value: any, index: number, array: any[]) => unknown; thisArg?: any }): any {
    if (Array.isArray(items) === false) {
      items = [items];
      return items.map(map.callbackFn, map.thisArg)[0];
    } else {
      return items.map(map.callbackFn, map.thisArg);
    }
  }
}

@Pipe({
  name: 'isEmpty',
  pure: false,
})
export class EmptyPipe implements PipeTransform {
  transform(items: any[]): any {
    return items.length === 0;
  }
}
