import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  pass: string = '';

  signIn() {
    console.log('Email:', this['email']); // Accede a 'email' utilizando la notación de indexación
    console.log('Contraseña:', this['pass']); // Accede a 'pass' utilizando la notación de indexación
  }

}
