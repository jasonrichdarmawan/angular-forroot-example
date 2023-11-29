import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENVIRONMENT_TOKEN, ENVIRONMENT_UUID_TOKEN, Environment } from '../core/environment';
import { OneService } from './one.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    OneService
  ]
})
export class OneModule {
  static forRoot(environment: Environment): ModuleWithProviders<OneModule> {
    return {
      ngModule: OneModule,
      providers: [
        { provide: ENVIRONMENT_UUID_TOKEN, useValue: crypto.randomUUID() },
        { provide: ENVIRONMENT_TOKEN, useValue: environment }
      ]
    };
  }
}
