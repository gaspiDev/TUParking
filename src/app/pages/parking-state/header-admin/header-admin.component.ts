import { Component } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent {
  title: string = 'TUParking';
  headerType: string = 'ADMINS';
}
