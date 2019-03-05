import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundraiserDashboardComponent } from './fundraiser-dashboard.component';

export const routes: Routes = [
    {
      path: 'fundraiser-dashboard',
      component: FundraiserDashboardComponent,
      
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class FundraiserRoutingModule {}