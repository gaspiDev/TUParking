import { Component } from '@angular/core';

@Component({
  selector: 'app-header-employee',
  standalone: true,
  imports: [],
  templateUrl: './header-employee.component.html',
  styleUrl: './header-employee.component.scss'
})
export class HeaderEmployeeComponent {
  title: string = 'TUParking';
  headerType: string = 'EMPLOYEES';
}
