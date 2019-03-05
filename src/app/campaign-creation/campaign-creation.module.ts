import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CampaignCreationComponent } from './campaign-creation.component';
import { CampaignCreationRoutingModule } from './campaign-creation.routing';

@NgModule({
  declarations: [CampaignCreationComponent],
  imports: [SharedModule,
    CampaignCreationRoutingModule
  ]
})
export class CampaignCreationModule { }