import { Component, OnInit } from '@angular/core';
import { Filter } from '../shared/models/filter';
import { ContentService } from '../shared/services/content.service';
import { forkJoin } from 'rxjs';
import { Section } from '../shared/models/section';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  sections: Section[];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {}

  uploadCards(filters: Filter[]) {
    this.sections = [];
    forkJoin(
      filters.map(filter => this.contentService.getByName(filter.strCategory))
    ).subscribe(responseObjects => {
      responseObjects.forEach((response, index) => {
        this.sections.push({
          name: filters[index].strCategory,
          cards: response.drinks,
        });
      });
    });
  }
}
