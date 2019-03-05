import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignCardComponent } from '../campaign-card/campaign-card.component';

export const routes: Routes = [
    {
      path: 'campaign',
      component: CampaignCardComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class OnpageMenuRoutingModule {}