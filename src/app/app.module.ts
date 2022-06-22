import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { Random } from './utils/random';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CartComponent } from './cart-list/cart.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ConfirmationComponent,
    CartListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [Random],
  bootstrap: [AppComponent],
})
export class AppModule {}
