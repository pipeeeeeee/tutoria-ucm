import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  cargando = false;

  constructor(private router: Router) {}

  login() {
    this.error = '';
    if (!this.email || !this.password) {
      this.error = 'Por favor completa todos los campos.';
      return;
    }
    this.cargando = true;
    // Simulación de login (en producción iría a una API)
    setTimeout(() => {
      this.cargando = false;
      // Credenciales de prueba
      if (this.email === 'demo@ucm.cl' && this.password === '12345') {
        this.router.navigate(['/tutores']);
      } else {
        this.error = '❌ Credenciales incorrectas. Usa demo@ucm.cl / 12345';
      }
    }, 1200);
  }
}