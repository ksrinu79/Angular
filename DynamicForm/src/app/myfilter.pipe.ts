import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: String): any[] {
    console.log(items);
    console.log(field);
    console.log(value);
    if (!items) return [];
   return items.filter(it => it[field] === value);
  }

}
