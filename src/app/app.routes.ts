import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ParkingStateComponent } from './pages/parking-state/parking-state-component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardContainerComponent } from './pages/dashboard-container/dashboard-container.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { PricesComponent } from './pages/prices/prices.component';
import { onlyPublicGuard } from './guards/only-public.guard';
import { onlyAdminGuard } from './guards/only-admin.guard';
import { onlyLoggedGuard } from './guards/only-logged.guard';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
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
        canActivate: [
          onlyPublicGuard
        ]
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
    component: SignupComponent,
    canActivate: [
      onlyPublicGuard
    ]
  },
  /* {
    path: "parking-state",
    component: ParkingStateComponent
  }, */
  // {
  //   path: "",
  //   redirectTo: "login",
  //   pathMatch: "full"
  // },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "not-found",
    pathMatch: "full"
  },
];
