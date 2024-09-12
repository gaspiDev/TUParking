import { Injectable } from '@angular/core';
import { Parking } from '../Interfaces/parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingServicesService {
  parking: Parking[] = [];

  lastNumber = this.parking[this.parking.length-1]?.number || 0;

  
  constructor() {}
  
  time(){
    return  new Date();
  }

  addNew(){
    this.parking.push(
      {
        number: this.lastNumber + 1,
        available: true,
        entry: `${this.time().getDate().toString().padStart(2, '0')}/${(this.time().getMonth() + 1).toString().padStart(2, '0')} ${this.time().getHours().toString().padStart(2, '0')}:${this.time().getMinutes().toString().padStart(2, '0')}`
      })
    this.lastNumber++;
    }
}
