import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ 
  path: '',
  loadChildren: 'src/app/home/home.module#HomeModule', 
  pathMatch: 'full' 
},
{ 
  path: 'login',
  loadChildren: 'src/app/login/login.module#LoginModule', 
  pathMatch: 'full' 
},
{
  path: 'donor-dashboard',
  loadChildren: 'src/app/donor-dashboard/donor-dashboard.module#DonorDashboardModule',
  pathMatch: 'full'
},
{
  path: 'fundraiser-dashboard',
  loadChildren: 'src/app/fundraiser-dashboard/fundraiser-dashboard.module#FundraiserDashboardModule',
  pathMatch: 'full'
},
{
  path: 'campaign-inside',
  loadChildren: 'src/app/campaign-inside/campaign-inside.module#CampaignInsideModule',
  pathMatch: 'full'
},
{
  path: 'campaign-creation',
  loadChildren: 'src/app/campaign-creation/campaign-creation.module#CampaignCreationModule',
  pathMatch: 'full'
},
{
  path: 'campaign-completion',
  loadChildren: 'src/app/campaign-completion/campaign-completion.module#CampaignCompletionModule',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
