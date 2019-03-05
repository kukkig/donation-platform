import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OnpageMenuRoutingModule } from './onpage-menu.routing';

@NgModule({
    imports: [
      SharedModule,
      OnpageMenuRoutingModule
    ],
    declarations: [],
    providers : []
  })
  export class LoginModule { }