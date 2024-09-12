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
  }
