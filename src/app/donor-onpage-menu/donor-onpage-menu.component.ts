import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-donor-onpage-menu",
  templateUrl: "./donor-onpage-menu.component.html",
  styleUrls: ["./donor-onpage-menu.component.scss"]
})
export class DonorOnpageMenuComponent implements OnInit {
  // Class variables
  public showNewC: boolean;
  public showDonatedC: boolean;
  public showTrackingL: boolean;

  /** Class constructor */
  constructor() {}

  /** Life Cycle hook to initialize values */
  ngOnInit() {
    this.showNewC = true;
    this.showDonatedC = false;
    this.showTrackingL = false;
  }

  /** toggle element visibility */
  public showCampaign(): void {
    this.showNewC = true;
    this.showDonatedC = false;
    this.showTrackingL = false;
  }

  public showTrackingList(): void {
    this.showNewC = false;
    this.showTrackingL = true;
    this.showDonatedC = false;
  }

  public showDonatedList(): void {
    this.showNewC = false;
    this.showTrackingL = false;
    this.showDonatedC = true;
  }
}
