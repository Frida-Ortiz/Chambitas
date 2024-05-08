import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  pass: string = '';

  constructor(private supabaseService: SupabaseService) {}

  async registerUser() {
    const email = 'example@email.com';
    const password = 'example-password';
  const response = await this.supabaseService.signUp(email, password);
    if (response.error) {
      console.error('Registration failed:', response.error);
    } else if (response.data) {
      console.log('User registered:', response.data);
    }
  }

}
