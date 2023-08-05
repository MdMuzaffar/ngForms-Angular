import { Injectable } from '@angular/core';
import { Passenger } from '../../Models/passenger.interface';
import {HttpClient } from '@angular/common/http';
// import { injectable}

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class PassengerDashboardService {
  constructor(private http:HttpClient) {
    console.log(this.http)
   }


  getPassengers(): Passenger[]{
    return [{
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
      checkedInDate: 1490742000000,
      childrens:null
  
    },{
      id: 5,
      fullName: 'Ayaan',
      checkedIn: false,
      checkedInDate: null,
      childrens:null
      } 
  ];
  }
}
