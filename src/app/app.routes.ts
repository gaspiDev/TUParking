import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ParkingStateComponent } from './pages/parking-state/parking-state-component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardContainerComponent } from './pages/dashboard-container/dashboard-container.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { PricesComponent } from './pages/prices/prices.component';
import { onlyAdminGuard } from './guards/only-admin.guard';
import { onlyLoggedGuard } from './guards/only-logged.guard';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "app",
    component: DashboardContainerComponent,
    canActivate: [onlyLoggedGuard],
    children: [
      {
        path: "",
        redirectTo: "parking-state",
        pathMatch: "full"
      },
      {
        path: "parking-state",
        component: ParkingStateComponent
      },
      {
        path: "reports",
        component: ReportsComponent,
        canActivate: [onlyAdminGuard]
      },
      {
        path: "prices",
        component: PricesComponent,
        canActivate: [onlyAdminGuard]
      }
    ]
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
];
