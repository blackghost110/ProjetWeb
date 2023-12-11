import { Routes } from '@angular/router';
import {DashboardGuard} from "../security/guard/dashboard.guard";

export const routes: Routes = [
  { path: '',canActivate: [DashboardGuard('account')], loadChildren: () => import('@dashboard').then(r => r.dashboardRoutes) },
  { path: 'account', loadChildren: () => import('@security').then(r => r.securityRoutes) },
  { path: '**',  loadComponent: () => import('../shared/routes/global-fall-back-page/global-fall-back-page.component').then(r => r.GlobalFallBackPageComponent) },


];
