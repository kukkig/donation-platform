import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-campaign-transfer-list",
  templateUrl: "./campaign-transfer-list.component.html",
  styleUrls: ["./campaign-transfer-list.component.scss"]
})
export class CampaignTransferListComponent implements OnInit {
  @Input() displayed: boolean;
  //poster = "assets/project.PNG";
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
