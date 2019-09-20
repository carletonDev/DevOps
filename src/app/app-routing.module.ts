import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from 'src/components/customer-list/customer-list.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { LoginComponent } from 'src/components/login/login.component';


const routes: Routes = [
  {path:"customers", component:CustomerListComponent},
  {path:"login",component:LoginComponent},
  {path: 'implicit/callback',component: OktaCallbackComponent}
];
//useful if u had data in another page that was protected 
//example:
// path: 'protected',
// component: ProtectedComponent,
// canActivate: [ OktaAuthGuard ],
// data: {
//   onAuthRequired
// }

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/login']);
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
