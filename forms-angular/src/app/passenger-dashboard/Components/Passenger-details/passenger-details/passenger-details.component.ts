import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Passenger } from 'src/app/passenger-dashboard/Models/passenger.interface';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
@Input()
  detail!:Passenger;
  editable:boolean = false;
  constructor() {
   }

   @Output()
   edit:EventEmitter<any> = new EventEmitter();

   @Output()
   remove:EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }
  onNameChange(value:string){
this.detail.fullName = value;
  }

  toggleEdit(){
    if(this.editable){
      this.edit.emit(this.detail)
    }
    this.editable = !this.editable
  }

  onRemoves(){
this.remove.emit(this.detail);
  }
}
