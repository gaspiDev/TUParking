import { inject, Injectable } from '@angular/core';
import { Spot } from '../Interfaces/spot';
import { DataAuthService } from './data-auth.service';
import { NewSpot } from '../Interfaces/newSpot';

@Injectable({
  providedIn: 'root'
})
export class ParkingServicesService {
  constructor() {
    this.getSpots();
  }
  spots:  Spot[] = [];

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
    this.spots = await res.json();
  }
 
  async addNewSpot(newSpotDescription: NewSpot){
    const res = await fetch('http://localhost:5000/cocheras', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + this.authService.usuario?.token
      },
      body: JSON.stringify(newSpotDescription)
    })
    if(res.status !== 201) return/*early error*/;
    return res;
  }

  async deleteThatSpot(id:number){
    const url = `http://localhost:5000/cocheras/${id}`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + this.authService.usuario?.token
      }
    })
    if(res.status !== 201) return/*early error*/;
    return res;
  }

  async setSpotFree(id: number){
    const url = `http://localhost:5000/cocheras/${id}/enable`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + this.authService.usuario?.token
      }
    })
    if(res.status !== 201) return/*early error*/;
    return res;
  }

  async setSpotOccupy(id: number){
    const url = `http://localhost:5000/cocheras/${id}/disable`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + this.authService.usuario?.token 
    }
  })
    if(res.status !== 201) return/*early error*/;
    return res;
  }

}
