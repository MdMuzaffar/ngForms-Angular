import { Component, OnInit } from '@angular/core';
import {Passenger} from './../../../Models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard-service/passenger-dashboard.service';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {
  
  passengers: Passenger[] = [];
  constructor( private passengerDashboardService:PassengerDashboardService) { }
  
  ngOnInit(): void {
     this.passengerDashboardService.getPassengers().subscribe((data)=>{
      this.passengers = data;
     })
  }

  handleEdit(event:Passenger){
    this.passengers = this.passengers.map((passenger:Passenger)=>{
      if(passenger.id === event.id){
        passenger = Object.assign({}, passenger,event)
      }
      
      return passenger;
    })
  }

  handleRemove(event:Passenger){
    this.passengers = this.passengers.filter((passenger:Passenger) =>{
      return passenger.id !== event.id;
    })
  }
}
