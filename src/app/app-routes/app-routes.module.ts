import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {HomeComponent} from '../home/home.component';
import {ShopComponent} from '../home/shop/shop.component';
import {FrontpageComponent} from '../home/frontpage/frontpage.component';
import {JoinusComponent} from '../home/joinus/joinus.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent,children:[
      {path:'identity',component:JoinusComponent},
      {path:':id',component:FrontpageComponent},
      {path:':id1/:id2/:id3',component:ShopComponent}
    ]}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
  ,exports:[
    RouterModule
  ]
})
export class AppRoutesModule { }
