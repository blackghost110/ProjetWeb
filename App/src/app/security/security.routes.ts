import {Routes} from "@angular/router";

export const securityRoutes: Routes = [
  //{ path: '', component: SignInPageComponent },
  { path: '', redirectTo : 'sign-in', pathMatch: 'full'},
  { path: 'sign-in', loadComponent: () => import('./page').then(c => c.SignInPageComponent)},
  { path: 'sign-up', loadComponent: () => import('./page').then(c => c.SignUpPageComponent)}

]
