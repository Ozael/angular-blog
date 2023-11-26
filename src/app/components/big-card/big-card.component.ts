import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  Id = '0';

  @Input()
  photoCover = '';

  @Input()
  title = '';

  @Input()
  description = '';

  constructor() {}

  ngOnInit(): void {}
}
