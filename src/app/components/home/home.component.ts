import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  stats = [
    { numero: '+150', label: 'Tutores Activos' },
    { numero: '+500', label: 'Estudiantes Ayudados' },
    { numero: '+30',  label: 'Materias Disponibles' },
    { numero: '4.8⭐', label: 'Valoración Promedio' }
  ];

  beneficios = [
    { icono: '📚', titulo: 'Aprende Mejor', desc: 'Tutorías personalizadas entre pares que comparten el mismo lenguaje académico.' },
    { icono: '💰', titulo: 'Genera Ingresos', desc: 'Los tutores pueden monetizar su conocimiento ayudando a otros compañeros.' },
    { icono: '🎯', titulo: 'Filtros Precisos', desc: 'Encuentra el tutor exacto según tu carrera y materia específica.' },
    { icono: '🤖', titulo: 'ChatBot Académico', desc: 'Asistente inteligente disponible 24/7 para dudas rápidas.' }
  ];
}