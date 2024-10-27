import { Injectable } from '@angular/core';
import { Fee } from '../Interfaces/Fee';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() {
    this.getPrices();
   }

  Fees: Fee[] = [];

  async getPrices(){
    const res = await fetch('http://localhost:5000/tarifas',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem("authToken")
      }
    }
    );
    if(res.status !== 200) return;
    const resJson: Fee[] = await res.json();
    this.Fees = resJson;
  }

  async updatePrice(id:string, valor:number){
    const newPrice = {"valor": valor}
    const url = `http://localhost:5000/tarifas/${id}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem("authToken")
      },
      body: JSON.stringify(newPrice)
    }
    );
    if(res.status !== 200) return;
  }
}
