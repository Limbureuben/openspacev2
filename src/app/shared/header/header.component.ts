import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideDown', [
      state('void', style({ transform: 'translateY(-100%)' })),
      transition(':enter', [
        animate('0.5s ease-out', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  openLoginDialog(): void {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '300px',
        backdropClass: 'custom-backdrop'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    openSignupDialog(): void {
      const dialogRef = this.dialog.open(RegisterComponent, {
        width: '300px',
        backdropClass: 'custom-backdrop'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    
}
