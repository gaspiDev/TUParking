import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Login} from '../../Interfaces/login';
import { DataAuthService } from '../../services/data-auth.service';
import Swal from 'sweetalert2';
import { FormsModule, NgForm } from '@angular/forms';
import { ModalsServicesService } from '../../services/modals-services.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  modal = inject(ModalsServicesService)
  authService = inject(DataAuthService)
  router = inject(Router)

  shownPassword: boolean = true;
  showPassword(){
    this.shownPassword = !this.shownPassword;
    
  }

  async login(loginForm: NgForm){
    const {username, password} = loginForm.value;
    const loginData: Login = {username, password};
    const resJson = await this.authService.login(loginData);
    if (resJson){
      this.router.navigate(['app', 'parking-state']);
    }else {
      this.modal.modalLoginFailed()
    }
  }

}
