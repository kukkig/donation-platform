import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Campaign } from "../model/campaign.model";

@Injectable({ providedIn: "root" })
export class CampaignCreationService {
  constructor(private http: HttpClient) {}

  createCampaign(campaign: Campaign) {
    return this.http.post(
      `http://localhost:4200/campaign-completion`,
      campaign
    );
  }
}
