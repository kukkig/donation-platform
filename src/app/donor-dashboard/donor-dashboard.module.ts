import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DonorDashboardComponent } from './donor-dashboard.component';
import { DonorRoutingModule } from './donor.routing';

@NgModule({
    imports: [
      SharedModule,
      DonorRoutingModule
    ],
    declarations: [
      DonorDashboardComponent
    ],
    providers : []
  })
  export class DonorDashboardModule { }