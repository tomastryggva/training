import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Material } from './app-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from '../app/http.service';
import { InfoComponent } from './info/info.component';
import { NavButtonsComponent } from './nav-buttons/nav-buttons.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PriceComponent } from './price/price.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoComponent,
    NavButtonsComponent,
    HeaderComponent,
    FooterComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Material,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
