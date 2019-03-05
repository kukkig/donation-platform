import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logo = 'assets/logo-big.png';
  poster1 = 'assets/gaokonlagao1.jpg';

  constructor() { }

  ngOnInit() {
  }

}
