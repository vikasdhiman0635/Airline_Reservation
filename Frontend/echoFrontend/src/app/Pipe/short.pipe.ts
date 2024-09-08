import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(item: any[], field: string, value: string): any[] {
    if (!item) {
      return [];
    }

    if (!field || !value) {
      return item;
    }

    let x = item.filter(function (item) {
      let lowercaseitem = item[field].toLowerCase();
      let res = lowercaseitem.includes(value.toLowerCase());
      return res;
    });
    return x; //array of emp
  }
}
