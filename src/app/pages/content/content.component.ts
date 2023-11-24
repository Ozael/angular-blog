import { Component, OnInit } from '@angular/core';
import '../../data/data';
import { data } from '../../data/data';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover = '';
  title = '';
  description = '';
  id = 1;

  constructor() {
    this.photoCover = data[this.id].photo;
    this.title = data[this.id].title;
    this.description = data[this.id].description;
  }

  ngOnInit(): void {}
}
