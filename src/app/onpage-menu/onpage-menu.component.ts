import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-onpage-menu",
  templateUrl: "./onpage-menu.component.html",
  styleUrls: ["./onpage-menu.component.scss"]
})
export class OnpageMenuComponent implements OnInit {
  // Class variables
  public cardIsShowed: boolean;
  public transferIsShowed: boolean;
  public withdrawIsShowed: boolean;

  /** Class constructor */
  constructor() {}

  /** Life Cycle hook to initialize values */
  ngOnInit() {
    this.cardIsShowed = true;
    this.transferIsShowed = false;
    this.withdrawIsShowed = false;
  }

  /** toggle element visibility */
  public showCampaignCard(): void {
    this.cardIsShowed = true;
    this.transferIsShowed = false;
    this.withdrawIsShowed = false;
  }

  public showTransferList(): void {
    this.cardIsShowed = false;
    this.transferIsShowed = true;
    this.withdrawIsShowed = false;
  }

  public showWithdrawList(): void {
    this.cardIsShowed = false;
    this.transferIsShowed = false;
    this.withdrawIsShowed = true;
  }
}
