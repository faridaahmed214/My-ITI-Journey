import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

function misMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { misMatch: true };
}

function hashPassword(password: string | null | undefined): Promise<string> {
  return crypto.subtle
    .digest('SHA-256', new TextEncoder().encode(password || ''))
    .then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
      
      
    });
}
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})

export class SignUp {
  private router = inject(Router);
  private authService = inject(AuthService);

  form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: misMatchValidator }
  );

  async onSubmit() {
    if (this.form.invalid) return; 

    const { name, email, password } = this.form.value;
    if (!name || !email || !password) return;

    const hashedPass = await hashPassword(password);

    this.authService.checkEmailExists(email).subscribe({
      next: (users) => {
        if (users && users.length > 0) {
          alert('Email already registered!');
        } else {
          const newUser = {
            id: Math.random().toString(36).substring(2, 9),
            userName: name,
            userEmail: email,
            userPassword: hashedPass
          };

          this.authService.register(newUser).subscribe({
            next: () => this.router.navigate(['/login']),
            error: (err) => console.error('Signup error', err)
          });
        }
      },
      error: (err) => console.error('Email check error', err)
    });
  }
}