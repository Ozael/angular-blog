import { Component, OnInit } from '@angular/core';
import '../../data/data';
import { data } from '../../data/data';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover = '';
  title = '';
  description = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });
    this.setValuesComponent(this.id);
  }

  setValuesComponent(id: string | null) {
    const result = data.filter((article) => article.id == id)[0];
    this.title = result.title;
    this.description = result.description;
    this.photoCover = result.photo;
    console.log(result);
  }
}
