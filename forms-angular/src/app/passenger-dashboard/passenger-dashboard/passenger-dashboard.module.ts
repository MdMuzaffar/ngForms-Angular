import { NgModule ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

//container
import { PassengerDashboardComponent } from '../containers/passenger-dashboard/passenger-dashboard/passenger-dashboard.component';

//Components
import { PassengerCountComponent } from '../Components/passenger-count/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from '../Components/Passenger-details/passenger-details/passenger-details.component';

//service
import { PassengerDashboardService } from '../containers/passenger-dashboard-service/passenger-dashboard.service';


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
  ],
  providers:[
    PassengerDashboardService
  ]
  // schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class PassengerDashboardModule { }
