import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [{path:'', component:ProductListComponent}, {path:'confirmation', component:ConfirmationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
