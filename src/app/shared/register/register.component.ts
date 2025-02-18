import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  formData:FormGroup;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, 
    private dialog: MatDialog,
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    private toastr: ToastrService

  ) {
    this.formData = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordComplexityValidator(),
      ],],
      passwordConfirm: ['', Validators.required],
    }, { Validators: this.passwordMatchValidator ()}
  );
  }

  passwordMatchValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('passwordConfirm')?.value;
      return password && confirmPassword && password !== confirmPassword
        ? { passwordMismatch: true }
        : null;
    };
  }

  passwordComplexityValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value || '';
      const complexityRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return complexityRegex.test(password)
        ? null
        : { passwordComplexity: true };
    };
  }

  onSubmit() {
    if (!this.formData.valid) {
      this.formData.markAllAsTouched();
      return;
    }

    const registrationData = this.formData.value;

    this.authservice.registerUser(registrationData).subscribe({
      next: (result) => {
        const response = result.data.registerUser;
        if(response.success) {
          this.toastr.success(response.message, 'success');
          this.router.navigate(['/login']);
        } else {
          this.toastr.error(response.message, 'Registration failed');
        }
      },
      error: (error) => {
        this.toastr.error('An error occurred. Please try again later.', 'Error');
      }
    });
  }

  hasError(field: string, errorType: string): boolean {
    const control = this.formData.get(field);
    return control?.hasError(errorType) && control?.touched ? true : false;
  }


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
