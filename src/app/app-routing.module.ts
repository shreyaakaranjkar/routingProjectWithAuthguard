import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { EditproductComponent } from './components/products/editproduct/editproduct.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './services/authguard.guard';

const routes: Routes = [
  {
    path:'',
    component : AuthComponent
  },
  {
    path:'home',
    component : HomeComponent,
    // canActivate : [AuthGuard]
  },
  {
    path:'products',
    component : ProductsComponent,
    canActivate : [AuthGuard],
    // canActivateChild : [AuthGuard],
    children : [
      {
        path : 'addproduct',
        component : EditproductComponent
      },
      {
        path : ':productId',
        component : ProductComponent
      },
      {
        path : ':productId/edit',
        component : EditproductComponent
      },
    ],
    data :{
      msg :'Products Component Data'
      //static data - the data sent through routing , get by subscribe or snapshot
    }
  },
 
  {
    path:'users',
    component : UsersComponent,
    canActivate : [AuthGuard],
    children : [
      {
        path : 'adduser',
        component : EdituserComponent
      },
      {
        path:':userId',
        component : UserComponent
      },
      {
        path:':userId/edit',
        component : EdituserComponent
      }
    ]
  },
 
  {
    path : '**',
    component : PnfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
