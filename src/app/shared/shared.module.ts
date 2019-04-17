import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

import { OnpageMenuComponent } from "../onpage-menu/onpage-menu.component";
import { CampaignCardComponent } from "../campaign-card/campaign-card.component";
import { CampaignTransferListComponent } from "../campaign-transfer-list/campaign-transfer-list.component";
import { TransferPopupComponent } from "../transfer-popup/transfer-popup.component";
import { CampaignDetailComponent } from "../campaign-detail/campaign-detail.component";
import { CampaignParticipantListComponent } from "../campaign-participant-list/campaign-participant-list.component";
import { CampaignProgressReportComponent } from "../campaign-progress-report/campaign-progress-report.component";
import { FundraiserTransferComponent } from "../fundraiser-transfer/fundraiser-transfer.component";

const SHARED_MODULES = [
  CommonModule,
  RouterModule,
  LazyLoadImageModule,
  FormsModule,
  ReactiveFormsModule
];

const SHARED_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OnpageMenuComponent,
  TransferPopupComponent,
  FundraiserTransferComponent,
  CampaignCardComponent,
  CampaignTransferListComponent,
  CampaignDetailComponent,
  CampaignParticipantListComponent,
  CampaignProgressReportComponent
];

@NgModule({
  imports: [SHARED_MODULES],
  declarations: [SHARED_COMPONENTS],
  exports: [SHARED_MODULES, SHARED_COMPONENTS]
})
export class SharedModule {}
