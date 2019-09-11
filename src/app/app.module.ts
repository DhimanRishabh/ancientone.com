import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './home/frontpage/slider/slider.component';
import { FrontpageComponent } from './home/frontpage/frontpage.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { ShopComponent } from './home/shop/shop.component';
import {AppRoutesModule} from './app-routes/app-routes.module';
import {RouterModule} from '@angular/router';
import { ProductComponent } from './home/shop/product/product.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { FiltersForMobileComponent } from './home/shop/filters-for-mobile/filters-for-mobile.component';
import { FiltersForWebComponent } from './home/shop/filters-for-web/filters-for-web.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    FrontpageComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    ProductComponent,
    JoinUsComponent,
    FiltersForMobileComponent,
    FiltersForWebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
