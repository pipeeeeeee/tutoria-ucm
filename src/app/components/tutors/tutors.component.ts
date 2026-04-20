import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TutorService } from '../../services/tutor.service';
import { Tutor } from '../../models/tutor.model';

@Component({
  selector: 'app-tutors',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {
  tutores: Tutor[] = [];
  tutoresFiltrados: Tutor[] = [];
  carreras: string[] = [];
  materias: string[] = [];

  filtroCarrera = '';
  filtroMateria = '';
  filtroBusqueda = '';

  constructor(private tutorService: TutorService) {}

  ngOnInit() {
    this.tutores = this.tutorService.getTutores();
    this.tutoresFiltrados = [...this.tutores];
    this.carreras = this.tutorService.getCarreras();
    this.materias = this.tutorService.getMaterias();
  }

  filtrar() {
    this.tutoresFiltrados = this.tutores.filter(t => {
      const matchCarrera = !this.filtroCarrera || t.carrera === this.filtroCarrera;
      const matchMateria = !this.filtroMateria || t.materias.includes(this.filtroMateria);
      const matchBusqueda = !this.filtroBusqueda ||
        t.nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase());
      return matchCarrera && matchMateria && matchBusqueda;
    });
  }

  limpiarFiltros() {
    this.filtroCarrera = '';
    this.filtroMateria = '';
    this.filtroBusqueda = '';
    this.tutoresFiltrados = [...this.tutores];
  }

  // Genera estrellas visuales para la valoración
  estrellas(val: number): string {
    return '⭐'.repeat(Math.round(val));
  }
}