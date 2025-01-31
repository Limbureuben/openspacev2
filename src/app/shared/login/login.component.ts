import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private router: Router) {}

  close(): void {
    this.dialogRef.close();
  }

  navigateToRegister(): void {
    this.router.navigate(['/'])
  }
}
