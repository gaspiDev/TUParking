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
    path: "login",
    component: LoginComponent,
    title: "TUParking Login"
  },
  {
    path: "signup",
    component: SignupComponent,
    title: "TUParking SignUp"
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
        component: ParkingStateComponent,
        title: "TUParking State"
      },
      {
        path: "reports",
        component: ReportsComponent,
        canActivate: [onlyAdminGuard],
        title: "TUParking Reports"
      },
      {
        path: "prices",
        component: PricesComponent,
        canActivate: [onlyAdminGuard],
        title: "TUParking Prices"
      }
    ]
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponent,
    title: "TUParking Not Found"
  }
];
