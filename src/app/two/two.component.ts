import { Component, OnInit } from '@angular/core';
import { OneService } from '../one/one.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  constructor(
    oneService: OneService
  ) { }

  ngOnInit(): void {
  }

}
