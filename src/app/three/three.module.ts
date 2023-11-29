import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeRoutingModule } from './three-routing.module';
import { ThreeComponent } from './three.component';
import { OneModule } from '../one/one.module';


@NgModule({
  declarations: [
    ThreeComponent
  ],
  imports: [
    CommonModule,
    ThreeRoutingModule,
    OneModule
  ]
})
export class ThreeModule { }
