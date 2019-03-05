import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CampaignCompletionComponent } from './campaign-completion.component';
import { CampaignCompletionRoutingModule } from './campaign-completion.routing';

@NgModule({
  declarations: [CampaignCompletionComponent],
  imports: [SharedModule,
    CampaignCompletionRoutingModule
  ]
})
export class CampaignCompletionModule { }