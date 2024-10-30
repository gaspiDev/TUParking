import { inject, Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ParkingServicesService } from './parking-service.service';

@Injectable({
  providedIn: 'root'
})
export class ModalsServicesService {

  constructor() { }

  parkingService = inject(ParkingServicesService)

  async modalDelete():Promise<true | null>{
    const  modal = await Swal.fire({
      title: 'You want to delete this Spot?',
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
      } else return null;
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

  async modalAddSpot(): Promise<string | null> {
    const result = await Swal.fire({
      title: 'Add a New Spot',
      background: '#1c2833',
      color: '#f2f2f2',
      input: 'text',
      inputLabel: 'Spot Floor and Number',
      inputPlaceholder: 'A01, B02 ...',
      showCancelButton: true,
      confirmButtonText: 'Add',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
    });
    if (result.isConfirmed) {
      const descripcion: string = result.value;
      return descripcion;
    } else {
      return null;
    }
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

  async openParkingModal(): Promise<string | null> {
    const result = await Swal.fire({
      title: 'Start a Parking',
      background: '#1c2833',
      color: '#f2f2f2',
      input: 'text',
      inputLabel: 'Plate Number',
      inputPlaceholder: 'ABC 123, AD 246 DZ...',
      showCancelButton: true,
      confirmButtonText: 'Start',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      inputValidator: (result) => {
        const pattern = /^[A-Z]{3} \d{3}$|^[A-Z]{2} \d{3} [A-Z]{2}$/;
        if (!pattern.test(result)) {
          return 'Please enter a valid plate number ( ABC 123 or AD 246 DZ )';
        } else if (this.parkingService.spots.find(s => s.estacionamiento?.patente == result)){
          return 'The plate number already exists'
        }
        return null;
      }
    });
    if (result.isConfirmed) {
      const patente: string = result.value;
      return patente;
    } else {
      return null;
    }
  }

  closeParkingModal(price: number | undefined){
    Swal.fire({
    title: "Parking Cashed",
    text: `The total price is $${price?.toPrecision(6)}`,
    background: '#1c2833',
    color: '#f2f2f2',
    confirmButtonText: 'Cashed',
    confirmButtonColor: '#28a745',
    });
  }

  async modalEditPrice(): Promise<number | null> {
    const result = await Swal.fire({
      title: 'Edit Price',
      background: '#1c2833',
      color: '#f2f2f2',
      input: 'number',
      inputPlaceholder: 'Enter the new price...',
      inputAttributes: {
        min: '0',
        step: '0.01'
      },
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
    });
    if (result.isConfirmed && result.value !== null) {
      const newPrice: number = parseFloat(result.value);
      return newPrice;
    } else {
      return null;
    }
  }

  }
