import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalsServicesService } from '../../services/modals-services.service';
import { ParkingServicesService } from '../../services/parking-service.service';


@Component({
  selector: 'app-parking-state',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './parking-state.component.html',
  styleUrl: './parking-state.component.scss'
})
export class ParkingStateComponent {
 modalServices = inject(ModalsServicesService)
 parkingServices = inject(ParkingServicesService)

  tableHeader = {
    c1: 'Spot Number',
    c2: 'Availability',
    c3: 'Ingress Time',
    c4: 'Actions'
  }
  
  async setSpotOccupy(id: number){
    await this.parkingServices.setSpotOccupy(id);
    this.parkingServices.getSpots();
  }
  
  async setSpotFree(id: number){
    await this.parkingServices.setSpotFree(id);
    this.parkingServices.getSpots();
  }
  
  async addNewSpot(){
    const modal = await this.modalServices.modalAddSpot();
    if(modal !== null){
      await this.parkingServices.addNewSpot(modal);
      this.parkingServices.getSpots();
    }
  }
  
  async deleteThatSpot(id: number){
    const modal = await this.modalServices.modalDelete();
    if(modal !== null){
     await this.parkingServices.deleteThatSpot(id);
     this.parkingServices.getSpots();
   }
  }
}

