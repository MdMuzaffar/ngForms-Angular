import { Component } from '@angular/core';

interface children{
  name : string,
  age : number
}
interface Passenger{
  id : number,
  fullName: string,
  checkedIn:boolean,
  checkedInDate?: number | null,
  childrens?: children[] | null
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-angular';


  passengers: Passenger[] = [{
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
]


}
