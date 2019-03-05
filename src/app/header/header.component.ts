import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavLink } from '../header/models/nav-link.model';
import { NavClick } from '../header/models/nav-click.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  @Input() navLinks: Array<NavLink>;
  @Output() onClick: EventEmitter<NavClick> = new EventEmitter<NavClick>();

  logo = 'assets/logo.PNG';

  constructor() { 
    this.setDefaultNavLinks();
  }

  /**
 * Sets the default navigation links
 *
 * @returns void
 */
setDefaultNavLinks(): void {
  this.navLinks = [
    <NavLink>{
      url: '/',
      label: 'Home',
      anchor: false
    },
    <NavLink>{
      url: '/',
      label: 'Campaign',
      anchor: false
    },
    <NavLink>{
      url: '/',
      label: 'About Us',
      anchor: false
    }
  ];

}

/**
* on init
*
* @memberof HeaderComponent
*/
ngOnInit(): void {

}

}
