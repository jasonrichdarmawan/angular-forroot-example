import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { OneModule } from './one/one.module';

import { environment } from 'src/environments/environment';
import { ENVIRONMENT_TOKEN, ENVIRONMENT_UUID_TOKEN } from './core/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // OneModule.forRoot(environment)
  ],
  providers: [
    { provide: ENVIRONMENT_UUID_TOKEN, useValue: crypto.randomUUID() },
    { provide: ENVIRONMENT_TOKEN, useValue: environment },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
