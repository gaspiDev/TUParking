import { inject, Injectable } from '@angular/core';
import { ParkingServicesService } from './parking-service.service';
import { Parking } from '../Interfaces/parking';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  lastParkings: Parking[] = [];

  constructor() {
    this.getLastParkings();
    console.log(this.lastParkings);
   }
  
  transactions: Parking[] = [];
  async getLastParkings(cantidad = 10) {
    const res = await fetch('http://localhost:5000/estacionamientos',{
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem("authToken")
      },
    })
    if(res.status !== 200) return;
    const resJson: Parking[] = await res.json();
    this.transactions = resJson;
    if (this.transactions.length === 0) {
      console.error("No Parkings Found.");
    }

    const transaccionesFiltradas = this.transactions.filter(parking => 
        parking.horaEgreso != null
    );

    const ultimasTransacciones = transaccionesFiltradas.sort((a, b) => new Date(b.horaEgreso.replace(" ", "T")).getTime() - new Date(a.horaEgreso.replace(" ", "T")).getTime()).slice(0, cantidad);

    this.lastParkings = ultimasTransacciones;
  }
}
