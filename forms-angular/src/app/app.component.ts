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


 


}
