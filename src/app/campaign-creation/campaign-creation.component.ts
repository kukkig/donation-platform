import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-creation',
  templateUrl: './campaign-creation.component.html',
  styleUrls: ['./campaign-creation.component.scss']
})
export class CampaignCreationComponent implements OnInit {

  creation_pic = 'assets/create-campaign-big.PNG';

  constructor() { }

  ngOnInit() {
  }

}
