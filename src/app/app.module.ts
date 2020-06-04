import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Material } from "./app-material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttpService } from "../app/http.service";
import { InfoComponent } from "./info/info.component";
import { NavButtonsComponent } from "./nav-buttons/nav-buttons.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PriceComponent } from "./price/price.component";
import { LoadingSpinnerComponent } from "assets/shared/loading-spinner.component";
import { TrainingComponent } from "./training/training.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { DropdownDirective } from "assets/shared/dropdown.directive";
import { ClickOutsideModule } from "ng-click-outside";

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
    TrainingComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Material,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ClickOutsideModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
