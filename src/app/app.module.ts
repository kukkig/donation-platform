import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home/home.module";
import { LoginModule } from "./login/login.module";
import { DonorDashboardModule } from "./donor-dashboard/donor-dashboard.module";
import { FundraiserDashboardModule } from "./fundraiser-dashboard/fundraiser-dashboard.module";
import { CampaignInsideModule } from "./campaign-inside/campaign-inside.module";
import { CampaignCreationModule } from "./campaign-creation/campaign-creation.module";
import { CampaignCompletionModule } from "./campaign-completion/campaign-completion.module";

import { CampaignCardModule } from "./campaign-card/campaign-card.module";

import { ApiService } from "./shared/services/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./shared/services/interceptor";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    DonorDashboardModule,
    FundraiserDashboardModule,
    CampaignInsideModule,
    CampaignCreationModule,
    CampaignCompletionModule,
    CampaignCardModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
