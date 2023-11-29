import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { OneModule } from '../one/one.module';


@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    TwoRoutingModule,
    OneModule
  ]
})
export class TwoModule { }
