import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-campaign-card",
  templateUrl: "./campaign-card.component.html",
  styleUrls: ["./campaign-card.component.scss"]
})
export class CampaignCardComponent implements OnInit {
  campaigns: any[]; //array of campaigns

  constructor(private httpService: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  /* Fetching data from json file */
  getData() {
    this.httpService.get("./assets/campaigns.json").subscribe(
      data => {
        this.campaigns = data as any[];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
