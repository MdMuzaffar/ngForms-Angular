import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from 'src/app/passenger-dashboard/Models/passenger.interface';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
@Input()
  detail!:Passenger;
  constructor() {
   }

  ngOnInit(): void {
  }

}
