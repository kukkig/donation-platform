import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-campaign-creation",
  templateUrl: "./campaign-creation.component.html",
  styleUrls: ["./campaign-creation.component.scss"]
})
export class CampaignCreationComponent implements OnInit {
  creation_pic = "assets/create-campaign-big.PNG";

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // ฟังก์ชันนี้จะประกอบไปด้วยรูปแบบการเก็บข้อมูลจากฟอร์มcreate campaignว่าเราจะเก็บอะไรบ้างไว้ในตัวแปรอะไร
    // แล้วจะส่งออกไปในformatไหน ซึ่ง
  }
}
