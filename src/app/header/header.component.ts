import {Component, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';
import {combineAll} from "rxjs/operators";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public innerWidth: any;
  private showSubNav: boolean=true;
  constructor(private rendrer:Renderer2) { }
  showCategory:boolean =true;
  showMenuBar:boolean=false;
  showSearchBar:boolean=true;
  showMobileMenu:boolean=false;
  showSubNavDetails: boolean=false;
  selectCategory: string;
  showIdentityBox:boolean=false;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

    if(this.innerWidth<800){
      this.showCategoryFn(false);

    }else{
      this.showCategoryFn(true);

      if(this.showMobileMenu) {
        this.showMobileMenuFn();
      }
    }
    if(this.innerWidth<700){
          this.showSearchBarFn(false);
    }else{
      this.showSearchBarFn(true);
    }
    if(this.innerWidth<700){
      this.showMenuBarFn(true);
      this.showSubNavFn(false);
    }else{
      this.showSubNavFn(true);
      this.showMenuBarFn(false);

    }
  }


  private showCategoryFn(value:boolean) {
    this.showCategory=value;
  }

  private showMenuBarFn(value: boolean) {
    this.showMenuBar=value;
  }

  private showSearchBarFn(value: boolean) {
    this.showSearchBar=value;
  }

  private showSubNavFn(value: boolean) {
    this.showSubNav=value;
  }

  private showMobileMenuFn(){
    this.showMobileMenu=!this.showMobileMenu;
  }

  showSubMenuDetails($event: any, value: boolean) {
    this.showSubNavDetails = value;
      this.selectCategory=$event.target.innerHTML;
  }
  private showIdentityBoxFn(value:boolean){
    this.showIdentityBox=value;
  }

}
