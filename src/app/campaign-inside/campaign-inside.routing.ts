import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignInsideComponent } from './campaign-inside.component';

export const routes: Routes = [
    {
      path: 'campaign-inside',
      component: CampaignInsideComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class CampaignInsideRoutingModule {}