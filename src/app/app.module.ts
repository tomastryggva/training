import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Material } from './app-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from '../app/http.service';
import { InfoComponent } from './info/info.component';
import { NavButtonsComponent } from './nav-buttons/nav-buttons.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PriceComponent } from './price/price.component';
import { LoadingSpinnerComponent } from 'assets/shared/loading-spinner.component';
import { TrainingComponent } from './training/training.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoComponent,
    NavButtonsComponent,
    HeaderComponent,
    FooterComponent,
    PriceComponent,
    LoadingSpinnerComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
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
