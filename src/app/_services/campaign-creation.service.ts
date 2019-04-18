import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Campaign } from '../_models/campaign.model';

@Injectable({ providedIn: 'root' })
export class CampaignCreationService {
    constructor(private http: HttpClient) { }

    createCampaign(campaign: Campaign) {
        return this.http.post('http://localhost:8080/api/campaigns', campaign);
    }

    getAllCampaign() {
        return this.http.get<Campaign[]>('${config.apiUrl}/campaign-completion');
    }

}
