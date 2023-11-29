import { Component } from '@angular/core';
import { OneService } from './one/one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forroot-example';

  constructor(
    // oneService: OneService,
  ) {
    
  }
}
