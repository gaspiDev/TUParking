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
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    })
    if(modal.isConfirmed) {
     Swal.fire(
         'Deleted!',
         'Your file has been deleted.',
         'success'
       );
        return true
      } else return false;
    };
  }
