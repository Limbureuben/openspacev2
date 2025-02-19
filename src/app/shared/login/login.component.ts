import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private dialog: MatDialog, private router: Router) {}

  close(): void {
    this.dialogRef.close();
  }

  // navigateToRegister(): void {
  //   this.close();
  //   this.dialog.open(RegisterComponent, {
  //     width: '400px',
  //     backdropClass: 'custom-backdrop'
  //   });
  // }
}
