import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignCreationComponent } from './campaign-creation.component';

export const routes: Routes = [
    {
      path: 'campaign-creation',
      component: CampaignCreationComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class CampaignCreationRoutingModule {}