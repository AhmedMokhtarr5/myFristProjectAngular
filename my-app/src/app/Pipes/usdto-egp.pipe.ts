import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGP',
  standalone: true
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value: number): number {
    return value*50;
  }

}
