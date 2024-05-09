import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-ofertatrabajo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ofertatrabajo.component.html',
  styleUrl: './ofertatrabajo.component.css'
})
export class OfertatrabajoComponent {
  registro: any = {
    nombreTrabajo: '',
    descripcionTrabajo: '',
    actividades: '',
    pago: null,
    oficios: '',
    tipoContrato: ''
  };

  submitForm() {
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log('Formulario enviado:', this.registro);
  }
}
