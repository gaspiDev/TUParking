import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Parking } from '../../Interfaces/parking';
import { CommonModule } from '@angular/common';
import { ModalsServicesService } from '../../services/modals-services.service';
import { ParkingServicesService } from '../../services/parking-services.service';


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
 parking = this.parkingServices.parking
  tableHeader = {
    c1: 'Spot Number',
    c2: 'Availability',
    c3: 'Ingress Time',
    c4: 'Actions'
  }

 
  
  addNew(){
    this.parkingServices.addNew();
  }

  async deleteThatSpot(index: number){
   
   if(await this.modalServices.modalDelete()){
    this.parkingServices.parking.splice(index, 1)
   }

  }

  occupyParkingState(index: number){
    this.parkingServices.parking[index].available = false
  }

  setFreeParkingState(index: number){
    this.parkingServices.parking[index].available = true
  }
  isAdmin = true;
}

