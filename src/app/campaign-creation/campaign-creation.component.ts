import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, from } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { Campaign } from '../_models/campaign.model';
import {CampaignCreationService} from '../_services/campaign-creation.service';


@Component({
  selector: 'app-campaign-creation',
  templateUrl: './campaign-creation.component.html',
  styleUrls: ['./campaign-creation.component.scss']
})
export class CampaignCreationComponent implements OnInit {
  creation_pic = 'assets/create-campaign-big.PNG';

  campaignForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private campaignService: CampaignCreationService,
    private router: Router
  ) {}

  ngOnInit() {
      this.campaignForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      target: ['', Validators.required],
      recipient: ['', Validators.required],
      deadline: ['', Validators.required],
      description: ['', Validators.required],
      objective: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.campaignForm.controls; }


  onSubmit() {
    console.warn(this.campaignForm.value);
    this.submitted = true;
     // stop here if form is invalid
     if (this.campaignForm.invalid) {
      return;
    }
    this.loading = true;
        this.campaignService.createCampaign(this.campaignForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('success');
                    this.router.navigate(['/campaign-completion']);
                });


  }
}
