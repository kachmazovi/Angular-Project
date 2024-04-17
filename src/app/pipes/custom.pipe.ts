import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number[]): number[] {
    // if (typeof value === 'string') {
    //   return value.slice(0, 10) + '...';
    // }

    // if (typeof value === 'number') {
    //   return value + '.00 $';
    // }

    if (Array.isArray(value) && value.every((param: number) =>  typeof param === 'number')) {
      return value.map(param => param * 2)
    }

    return value;
  }

}
