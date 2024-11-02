import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReportsComponent } from '../reports/reports.component';
import { PricesComponent } from '../prices/prices.component';
import { ParkingStateComponent } from '../parking-state/parking-state-component';
import { ParkingServicesService } from '../../services/parking-service.service';
import { DataAuthService } from '../../services/data-auth.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [ParkingStateComponent, ReportsComponent, PricesComponent, RouterModule, NgClass],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {
  parkingService = inject(ParkingServicesService);
  dataAuthService = inject(DataAuthService);
  router = inject(Router)

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  closeSession(){
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    this.dataAuthService.usuario = undefined;
    this.router.navigate(['landing']);
  }
}
