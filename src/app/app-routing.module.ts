import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavButtonsComponent } from './nav-buttons/nav-buttons.component';
import { InfoComponent } from './info/info.component';
import { PriceComponent } from './price/price.component';


const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: '', component: NavButtonsComponent},
  { path: 'about', component: InfoComponent},
  { path: '#resume', component: PriceComponent},
  { path: '#contact', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
