import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from 'src/components/customer-list/customer-list.component';
import { OktaCallbackComponent } from '@okta/okta-angular';


const routes: Routes = [
  {path:"customers", component:CustomerListComponent},
  {path: 'implicit/callback',component: OktaCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
