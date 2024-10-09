import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataAuthService } from '../../services/data-auth.service';
import { ModalsServicesService } from '../../services/modals-services.service';
import { SignUp } from '../../Interfaces/signUp';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  authService = inject(DataAuthService)
  router = inject(Router)
  modal = inject(ModalsServicesService)

  async signUp(signUpForm: NgForm){
    
    const {username, nombre, apellido, password/*, confirmPassword*/} = signUpForm.value;
    const signUpData: SignUp = {username, nombre, apellido, password/*, confirmPassword*/};
    
    const res = await this.authService.signUp(signUpData)
    if (res?.statusText === 'Created'){
      this.router.navigate(['/login']).then(() => {this.modal.modalSignUpSuccesfull()});
    }else {
      this.modal.modalSignUpFailed();
    }
  }
}
