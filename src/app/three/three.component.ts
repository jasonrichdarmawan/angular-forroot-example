import { Component, OnInit } from '@angular/core';
import { OneService } from '../one/one.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  constructor(
    oneService: OneService
  ) {}

  ngOnInit(): void {
  }

}
