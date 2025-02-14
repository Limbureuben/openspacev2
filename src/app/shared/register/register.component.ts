import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private dialog: MatDialog) {}

  close(): void {
    this.dialogRef.close();
  }

  navigateToLogin(): void {
    this.close();
    this.dialog.open(LoginComponent, {
      width: '400px',
      backdropClass: 'custom-backdrop'
    })
  }

}
