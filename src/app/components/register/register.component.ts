import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = {
    nombre: '',
    rut: '',
    email: '',
    carrera: '',
    materias: '',
    password: '',
    rol: 'estudiante'   // 'estudiante' o 'tutor'
  };
  registrado = false;
  error = '';

  carreras = [
    'Ingeniería Civil Informática',
    'Pedagogía en Matemáticas',
    'Medicina',
    'Derecho',
    'Psicología',
    'Ingeniería Comercial',
    'Enfermería',
    'Arquitectura'
  ];

  registrar() {
    const { nombre, rut, email, carrera, password } = this.form;
    if (!nombre || !rut || !email || !carrera || !password) {
      this.error = 'Por favor completa todos los campos obligatorios.';
      return;
    }
    this.error = '';
    this.registrado = true;
    // En producción: llamada a API con this.form
  }
}