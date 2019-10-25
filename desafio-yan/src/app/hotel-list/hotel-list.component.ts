import { MyDialogComponent } from './../my-dialog/my-dialog.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { hotels } from './../hotel';
import { Component, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {

  constructor(public dialog: MatDialog){}
  hotel = hotels;
  filterHotel = '';

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  detalhes() {
    window.alert('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  }
}




