import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalsServicesService } from '../../services/modals-services.service';
import { ParkingServicesService } from '../../services/parking-service.service';
import { OpenParking } from '../../Interfaces/openParking';
import { DataAuthService } from '../../services/data-auth.service';


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
 dataAuthServices = inject(DataAuthService)

  tableHeader = {
    c1: 'Spot Number',
    c2: 'Availability',
    c3: 'Actions'
  }
  
  async disableSpot(id: number){
    await this.parkingServices.setSpotDisable(id);
    this.parkingServices.loadData();
  }
  
  async enableSpot(id: number){
    await this.parkingServices.setSpotEnable(id);
    this.parkingServices.loadData();
  }
  
  async addNewSpot(){
    const modal = await this.modalServices.modalAddSpot();
    if(modal !== null){
      await this.parkingServices.addNewSpot(modal);
      this.parkingServices.loadData();
    }
  }
  
  async deleteThatSpot(id: number){
    const modal = await this.modalServices.modalDelete();
    if(modal !== null){
     await this.parkingServices.deleteThatSpot(id);
     this.parkingServices.loadData();
   }
  }

  async closeParking(id: number){
    
  }

  async openParking(id: number){
    let patente: string = "";
    const modal = await this.modalServices.openParkingModal();
    if (modal !== null){
      patente = modal;
    } else {
      return;
    }
    const idCochera: number = id;
    let username: string = "";
    if (this.dataAuthServices.usuario?.isAdmin == 1){
      username = "ADMIN"
    } else {
      username= "EMPLOYEE"
    }
    const openedParking: OpenParking = { patente, idCochera, username }
    await this.parkingServices.openParking(openedParking);
    this.parkingServices.loadData();
  }
}

