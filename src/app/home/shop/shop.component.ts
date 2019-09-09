import {Component, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  selectedItem: number;
  showWebFilter: any;
  @ViewChild("container",{static:true}) conatiner;
  constructor(private rendrer:Renderer2) { }

  ngOnInit() {
     console.log(this.conatiner);
    if (window.innerWidth < 600) {
      this.showWebFilterFn(false);
      this.rendrer.removeClass(this.conatiner.nativeElement,'container-shop');
      this.rendrer.addClass(this.conatiner.nativeElement,'container-shop-mobile');

    } else {
      this.showWebFilterFn(true);
      this.rendrer.addClass(this.conatiner.nativeElement,'container-shop');
      this.rendrer.removeClass(this.conatiner.nativeElement,'container-shop-mobile');
    }

  }
  showWebFilterFn(value: boolean) {
    this.showWebFilter =  value;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth < 600) {
      this.showWebFilterFn(false);
      this.rendrer.removeClass(this.conatiner.nativeElement,'container-shop');
      this.rendrer.addClass(this.conatiner.nativeElement,'container-shop-mobile');
    } else {
      this.showWebFilterFn(true);
      this.rendrer.addClass(this.conatiner.nativeElement,'container-shop');
      this.rendrer.removeClass(this.conatiner.nativeElement,'container-shop-mobile');
    }
  }

  showOverlayForItem(i: number) {
     this.selectedItem=i;
  }



}
