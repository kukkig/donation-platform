import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTransferListComponent } from './campaign-transfer-list.component';

describe('CampaignTransferListComponent', () => {
  let component: CampaignTransferListComponent;
  let fixture: ComponentFixture<CampaignTransferListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignTransferListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
