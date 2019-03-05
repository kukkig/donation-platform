import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CampaignInsideRoutingModule } from './campaign-inside.routing';
import { CampaignInsideComponent } from './campaign-inside.component';

@NgModule({
  declarations: [CampaignInsideComponent],
  imports: [
    SharedModule,
    CampaignInsideRoutingModule
  ]
})
export class CampaignInsideModule { }
