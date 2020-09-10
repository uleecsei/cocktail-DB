import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../shared/services/filter.service';
import { Filter } from '../shared/models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterItems: Filter[];
  @Output() upload = new EventEmitter<Filter[]>(true);
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.getItems().subscribe(items => {
      this.filterItems = items.drinks;
      this.filterItems.map(item => {
        item.isChecked = true;
      });
      this.upload.emit(this.filterItems);
    });
  }

  reloadCards() {
    const selectedFilters = this.filterItems.filter(item => item.isChecked);
    this.upload.emit(selectedFilters);
  }
}
