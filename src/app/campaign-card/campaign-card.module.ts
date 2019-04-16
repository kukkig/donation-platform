import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CampaignCardRoutingModule } from "./campaign-card.routing";
//import { CampaignCardComponent } from './campaign-card.component';

@NgModule({
  declarations: [],
  imports: [SharedModule, CampaignCardRoutingModule]
})
export class CampaignCardModule {}
