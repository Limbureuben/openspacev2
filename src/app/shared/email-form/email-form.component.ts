import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-email-form',
  standalone: false,
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {

  emailForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EmailFormComponent>) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  close() : void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if(this.emailForm.valid) {
      console.log(this.emailForm.value);
      this.dialogRef.close();
    }
  }
}
