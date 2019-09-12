import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {HomeComponent} from '../home/home.component';
import {ShopComponent} from '../home/shop/shop.component';
import {FrontpageComponent} from '../home/frontpage/frontpage.component';
import {JoinUsComponent} from '../join-us/join-us.component';

const appRoutes: Routes = [
  {path: 'identity', component: JoinUsComponent},
  {
    path: '', component: HomeComponent, children: [
      {path: ':id', component: FrontpageComponent},
      {path: ':id1/:id2/:id3', component: ShopComponent}
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
  , exports: [
    RouterModule
  ]
})
export class AppRoutesModule {
}
