import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorDashboardComponent } from './donor-dashboard.component';

export const routes: Routes = [
    {
      path: 'donor-dashboard',
      component: DonorDashboardComponent,
      
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class DonorRoutingModule {}