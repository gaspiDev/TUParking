import { inject, Injectable } from '@angular/core';
import { Parking } from '../Interfaces/parking';
import { DataAuthService } from './data-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingServicesService {
  constructor() {
    this.getSpots();
  }
  parking:  Parking[] = [];

  authService = inject(DataAuthService);
  
  async getSpots(){
    const res = await fetch('http://localhost:5000/cocheras',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + this.authService.usuario?.token
      }
    }
    );
    const resJson: Parking[] = await res.json();
    this.parking = resJson;
  }

  time(){
    return  new Date();
  }

}
