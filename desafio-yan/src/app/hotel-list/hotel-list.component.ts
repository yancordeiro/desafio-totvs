import { hotels } from './../hotel';
import { Component, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
  hotel = hotels;

  detalhes() {
    window.alert('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  }
}




