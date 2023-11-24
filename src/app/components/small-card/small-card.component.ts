import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover = '';

  @Input()
  title = '';

  @Input()
  description = '';

  constructor() {}

  ngOnInit(): void {
    if (this.description.length > 200) {
      this.description = `${this.description.substring(0, 200)}...`;
    }
  }
}
