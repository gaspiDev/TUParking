import { inject, Injectable } from '@angular/core';
import { Spot } from '../Interfaces/spot';
import { DataAuthService } from './data-auth.service';
import { Parking } from '../Interfaces/parking';
import { OpenParking } from '../Interfaces/openParking';
import { CloseParking } from '../Interfaces/closeParking';

@Injectable({
  providedIn: 'root'
})
export class ParkingServicesService {
  spots:  Spot[] = [];
  parkings:  Parking[] = [];
  authService = inject(DataAuthService);
  
  constructor() {
    this.loadData();
  }
  
  async loadData() {
    await this.getSpots()
    await this.getParkings()
    this.linkParkingWithSpot()
  }

  async getSpots(){
    const res = await fetch('http://localhost:5000/cocheras',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem("authToken")
      }
    }
    );
    if(res.status !== 200) return;
    const resJson:Spot[] = await res.json();
    this.spots = resJson;
  }

  async getParkings(){
    const res = await fetch('http://localhost:5000/estacionamientos',{
      method: 'GET',
      headers: {
        authorization:'Bearer '+ localStorage.getItem("authToken")
      },
    })
    if(res.status !== 200) return;
    const resJson: Parking[] = await res.json();
    this.parkings = resJson;
  }

  linkParkingWithSpot() {
    this.spots = this.spots.map(cochera => {
      const estacionamiento = this.parkings.find(e => e.idCochera === cochera.id && !e.horaEgreso)
      return {...cochera, estacionamiento}
    });
  }
 
  async addNewSpot(newSpotDescription: string){
    const newSpot = {"descripcion" : newSpotDescription};
    const res = await fetch('http://localhost:5000/cocheras', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem("authToken")
      },
      body: JSON.stringify(newSpot)
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
        authorization: 'Bearer ' + localStorage.getItem("authToken")
      }
    })
    if(res.status !== 201) return/*early error*/;
    return res;
  }

  async setSpotEnable(id: number){
    const url = `http://localhost:5000/cocheras/${id}/enable`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem("authToken")
      }
    })
    if(res.status !== 201) return/*early error*/;
    return res;
  }

  async setSpotDisable(id: number){
    const url = `http://localhost:5000/cocheras/${id}/disable`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem("authToken") 
    }
  })
    if(res.status !== 201) return/*early error*/;
    return res;
  }

  async openParking(openedParking: OpenParking){
    const url = `http://localhost:5000/estacionamientos/abrir`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem("authToken")
      },
      body: JSON.stringify(openedParking)
  })
    if(res.status !== 201) return/*early error*/;
    return res;
  }

  async closeParking(closedParking: CloseParking){
    const url = `http://localhost:5000/estacionamientos/cerrar`;
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem("authToken")
      },
      body: JSON.stringify(closedParking)
  })
    if(res.status !== 201) return/*early error*/;
    return res;
  }
  }
