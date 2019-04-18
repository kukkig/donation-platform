import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { first } from "rxjs/operators";
import { AlertService } from "../shared/services/alert.service";
import { CampaignCreationService } from "../campaign-creation/services/campaign-creation.service";

@Component({
  selector: "app-campaign-creation",
  templateUrl: "./campaign-creation.component.html",
  styleUrls: ["./campaign-creation.component.scss"]
})
export class CampaignCreationComponent implements OnInit {
  campaignForm: FormGroup;
  submitted: boolean = false;

  creation_pic = "assets/create-campaign-big.PNG";
  categories = [
    { id: 1, category: "Education" },
    { id: 2, category: "Health & Medical" },
    { id: 3, category: "Human Services" },
    { id: 4, category: "Animal & Humane" },
    { id: 5, category: "Arts & Culture" }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private campaignCreationService: CampaignCreationService
  ) {}

  ngOnInit() {
    this.campaignForm = this.formBuilder.group({
      campaign_title: ["", Validators.required],
      campaign_category: ["", Validators.required],
      target_funds: ["", Validators.required],
      campaign_recipient: ["", Validators.required],
      campaign_deadline: ["", Validators.required],
      campaign_detail: ["", Validators.required],
      campaign_objective: ["", Validators.required]
    });
  }

  get f() {
    return this.campaignForm.controls;
  }

  // Action to be triggered after submitting campaign creation form
  onSubmit() {
    console.warn(this.campaignForm.value);

    this.campaignCreationService
      .createCampaign(this.campaignForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success("Campaign Creation successful", true);
          this.router.navigate(["/campaign-completion"]);
        },
        error => {
          this.alertService.error(error);
          // this.submitted = false;
        }
      );
  }
}
