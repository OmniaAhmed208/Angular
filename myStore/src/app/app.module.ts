import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CongratsComponent } from './congrats/congrats.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HeaderComponent } from './header/header.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    CongratsComponent,
    ConfirmationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    // FlexLayoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
