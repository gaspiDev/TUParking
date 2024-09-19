import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Login} from '../../Interfaces/login';
import { DataAuthService } from '../../services/data-auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(DataAuthService)
  router = inject(Router)
  loginData:Login = {
    username: 'admin',
    password: 'admin'
  }
  async login(){
    const resJson = await this.authService.login(this.loginData);
    
    if (resJson){
      this.router.navigate(['app', 'parking-state']);
    }else {
      Swal.fire({
        title: 'Login Failed',
        text: 'Incorrect username or password!',
        icon: 'error',
        iconColor: '#ffcc50',
        background: '#1c2833',
        color: '#f2f2f2',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#178117',
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#be3939',
        showCancelButton: true,
        buttonsStyling: true})
    }
  }

}
