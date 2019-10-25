import { hotels } from './../hotel';
import { Pipe, PipeTransform } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultHotel = [];
    for (const hotel of value) {
      if (hotel.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultHotel.push(hotel);
      }
    }
    return resultHotel;
  }

}
