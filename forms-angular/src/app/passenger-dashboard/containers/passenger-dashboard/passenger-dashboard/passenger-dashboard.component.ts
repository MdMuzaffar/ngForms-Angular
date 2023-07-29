import { Component, OnInit } from '@angular/core';
import {Passenger} from './../../../Models/passenger.interface';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {
  
  passengers: Passenger[] = [];
  constructor() { }
  
  ngOnInit(): void {
    this.passengers =[{
      id: 1,
      fullName: 'Muzaffar',
      checkedIn: true,
      checkedInDate: 1490742000000,
      childrens: [{name:'ayaan', age : 7}, {name:'Shaista', age: 3}]
    },{
      id: 2,
      fullName: 'Afsar',
      checkedIn: true,
      checkedInDate: 1490742000000,
      childrens: [{name:'Faraz', age : 5}, {name:'Aariz', age: 1}]
  
  
    },{
      id: 3,
      fullName: 'Naz',
      checkedIn: false,
      checkedInDate: null,
      childrens: [{name:'Limra', age : 11}, {name:'Ibrahim', age: 8}, {name:'Ismial', age: 8}]
  
  
    },{
      id: 4,
      fullName: 'Ash',
      checkedIn: true,
      checkedInDate: 1490742000000
  
    },{
      id: 5,
      fullName: 'Ayaan',
      checkedIn: false,
      checkedInDate: null
  
    }
  ];
  }
}
