import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FundraiserDashboardComponent } from './fundraiser-dashboard.component';
import { FundraiserRoutingModule } from './fundraiser.routing';

@NgModule({
    imports: [
      SharedModule,
      FundraiserRoutingModule
    ],
    declarations: [
      FundraiserDashboardComponent
    ],
    providers : []
  })
  export class FundraiserDashboardModule { }