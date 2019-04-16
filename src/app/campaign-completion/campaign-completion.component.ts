import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-campaign-completion",
  templateUrl: "./campaign-completion.component.html",
  styleUrls: ["./campaign-completion.component.scss"]
})
export class CampaignCompletionComponent implements OnInit {
  // Class variables
  campaign_poster = "assets/campaign-poster.PNG";
  today: number = Date.now();
  public detail_displayed: boolean;
  public progress_displayed: boolean;
  public party_displayed: boolean;

  /** Class constructor */
  constructor() {}

  /** Life Cycle hook to initialize values */
  ngOnInit() {
    this.detail_displayed = true;
    this.progress_displayed = false;
    this.party_displayed = false;
  }

  /** toggle element visibility */
  public showDetail(): void {
    this.detail_displayed = true;
    this.progress_displayed = false;
    this.party_displayed = false;
  }

  public showProgress(): void {
    this.detail_displayed = false;
    this.progress_displayed = true;
    this.party_displayed = false;
  }

  public showParty(): void {
    this.detail_displayed = false;
    this.progress_displayed = false;
    this.party_displayed = true;
  }
}
