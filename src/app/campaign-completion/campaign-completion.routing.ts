import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignCompletionComponent } from './campaign-completion.component';

export const routes: Routes = [
    {
      path: 'campaign-completion',
      component: CampaignCompletionComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class CampaignCompletionRoutingModule {}