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
  
  async deleteThatSpot(index: number){
   if(await this.modalServices.modalDelete()){
    this.parkingServices.deleteThatSpot(index);
   }
  }

  occupyParkingState(index: number){
    this.parkingServices.parking[index].deshabilitada = 1
  }

  setFreeParkingState(index: number){
    this.parkingServices.parking[index].deshabilitada = 0
  }

  modalAddSpotNow(){
    this.modalServices.modalAddSpot()
  }

}

