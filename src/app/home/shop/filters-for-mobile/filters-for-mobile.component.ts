import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-for-mobile',
  templateUrl: './filters-for-mobile.component.html',
  styleUrls: ['./filters-for-mobile.component.css']
})
export class FiltersForMobileComponent implements OnInit {
  selectdMainFilter: string;

  constructor() { }

  ngOnInit() {
  }

  showMobileMenu(sortby: string) {
    console.log(sortby);
    this.selectdMainFilter=sortby;
  }
}
