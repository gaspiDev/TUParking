import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReportsComponent } from '../reports/reports.component';
import { PricesComponent } from '../prices/prices.component';
import { ParkingStateComponent } from '../parking-state/parking-state-component';
import { ParkingServicesService } from '../../services/parking-service.service';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ParkingStateComponent, ReportsComponent, PricesComponent],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {
  title: string = 'TUParking';
  parkingServices = inject(ParkingServicesService)
}
