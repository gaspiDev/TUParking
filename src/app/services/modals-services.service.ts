import { inject, Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ModalsServicesService {

  constructor() { }
  async modalDelete():Promise<boolean>{
    const  modal = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      iconColor: '#ffcc50',
      background: '#1c2833',
      color: '#f2f2f2',
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#178117',
      cancelButtonText: 'No, cancel!',
      cancelButtonColor: '#be3939',
      showCancelButton: true,
      buttonsStyling: true,
    });
    if(modal.isConfirmed) {
        return true
      } else return false;
    };

  async modalAccesDenied(){
    const modal = await Swal.fire({
      title: 'No estás autorizado',
      text: 'No tienes los permisos necesarios para acceder a esta página.',
      icon: 'error',
      iconColor: '#ff4b5c',
      background: '#1c2833',
      color: '#f2f2f2',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#be3939',
      buttonsStyling: true
    });
    return modal
  }

  modalLoginFailed(){
    Swal.fire({
      title: 'Login Failed',
      text: 'Incorrect username or password!',
      icon: 'error',
      iconColor: '#be3939',
      background: '#1c2833',
      color: '#f2f2f2',
      confirmButtonText: 'Try Again',
      confirmButtonColor: '#178117',
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#be3939',
      buttonsStyling: true})
  }

  modalAddSpot(){
    Swal.fire({
      title: 'Add a New Spot',
      input: 'text',
      inputLabel: 'Spot Floor and Number',
      inputPlaceholder: 'A01, B02 ...',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`You entered: ${result.value}`)
      }
    });
  }

  modalSignUpFailed(){
    Swal.fire({
      title: 'Sign Up Failed',
      text: 'There was an issue with your registration. Please try again.',
      icon: 'error',
      iconColor: '#be3939',
      background: '#1c2833',
      color: '#f2f2f2',
      confirmButtonText: 'Retry',
      confirmButtonColor: '#178117',
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#be3939',
      showCancelButton: true,
      buttonsStyling: true
    })    
  }

  modalSignUpSuccesfull(){
    Swal.fire({
      title: 'Sign Up Successful',
      text: 'Your account has been created successfully!',
      icon: 'success',
      iconColor: '#178117',
      background: '#1c2833',
      color: '#f2f2f2',
      confirmButtonText: 'Continue',
      confirmButtonColor: '#178117',
      cancelButtonText: 'Close',
      cancelButtonColor: '#be3939',
      showCancelButton: true,
      buttonsStyling: true
    })  
  }
  }
