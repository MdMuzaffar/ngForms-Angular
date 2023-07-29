import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//container
import { PassengerDashboardComponent } from '../containers/passenger-dashboard/passenger-dashboard/passenger-dashboard.component';

//Components
import { PassengerCountComponent } from '../Components/passenger-count/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from '../Components/Passenger-details/passenger-details/passenger-details.component';


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule { }
