import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';
import { Login, ResLogin } from '../Interfaces/login';
import { SignUp } from '../Interfaces/signUp';

@Injectable({
  providedIn: 'root'
})
export class DataAuthService {

  constructor() { 
    const token = this.getTokenLH();
    if (token){
      this.usuario = {
        username: localStorage.getItem("username")!,
        token: token,
        isAdmin: Number(localStorage.getItem("role")) 
      }
    } else {
      this.usuario = undefined;
    }
  }

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
      isAdmin: resJson.isAdmin
    };

    localStorage.setItem("authToken", resJson.token)
    localStorage.setItem("role", JSON.stringify(resJson.isAdmin ? 1 : 0))
    localStorage.setItem("username", resJson.username)
  
    return resJson;
  }

  getTokenLH(){
    return localStorage.getItem("authToken")
  }
  
  async signUp(signUpData: SignUp)
  {
    const res = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(signUpData)
    })
    if(res.status !== 201) return/*early error*/;
    return res;
  }
}
