import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ParkingStateComponent } from './pages/parking-state/parking-state.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "parking-state",
    component: ParkingStateComponent
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
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
