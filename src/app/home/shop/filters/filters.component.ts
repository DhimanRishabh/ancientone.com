import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }
  showWebFilter = true;
  ngOnInit() {

    if (window.innerWidth < 600) {
      this.showWebFilterFn(false);
        } else {
      this.showWebFilterFn(true);
        }

  }
showWebFilterFn(value: boolean) {
      this.showWebFilter =  value;
  }
@HostListener('window:resize', ['$event'])
onResize(event) {

  if (window.innerWidth < 600) {
    this.showWebFilterFn(false);
  } else {
    this.showWebFilterFn(true);
  }

  }

}
