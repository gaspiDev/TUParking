import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';
import { Login, ResLogin } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class DataAuthService {

  constructor() { }

  usuario: User | undefined;

  async login(loginData:Login)
  {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    if(res.status !== 200) return/*early error*/;
    const resJson:ResLogin = await res.json();
    if(!resJson.token) return/*early error*/;
    this.usuario = {
      username: loginData.username,
      token: resJson.token,
      isAdmin: true
    }
    return resJson;
  }
}
