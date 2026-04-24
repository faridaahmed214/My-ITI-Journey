import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
function hashPassword(password: string | null | undefined): Promise<string> {
  return crypto.subtle
    .digest('SHA-256', new TextEncoder().encode(password || ''))
    .then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    });
}
@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  private authService = inject(AuthService);
  email: string = '';
  password: string = '';

  async login(form: NgForm, email: NgModel, password: NgModel) {
    if (!email.value || !password.value) return;
    
    const hashedPassword = await hashPassword(password.value);
    
    this.authService.login(email.value, hashedPassword).subscribe({
      next: (users) => {
        if (users && users.length > 0) {
          this.authService.setCurrentUser(users[0]);
          this.router.navigate(['/home']);
        } else { 
          console.log('Invalid email or password!');
        }
      },
      error: (err) => {
        console.error('Login error', err);
      }
    });
  }
}
