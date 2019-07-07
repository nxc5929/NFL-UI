import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'debug' })
export class HelperPipe implements PipeTransform {
  transform(object: any) {
    console.log(Object.keys(object));
  }
}