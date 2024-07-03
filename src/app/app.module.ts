import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/products/product/product.component';
import { EditproductComponent } from './components/products/editproduct/editproduct.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProductsComponent,
    UsersComponent,
    UserComponent,
    EdituserComponent,
    ProductComponent,
    EditproductComponent,
    PnfComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
