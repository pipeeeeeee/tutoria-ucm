import { Injectable } from '@angular/core';
import { Tutor } from '../models/tutor.model';

@Injectable({ providedIn: 'root' })
export class TutorService {

  // 📦 Datos simulados (mock data)
  private tutores: Tutor[] = [
    {
      id: 1,
      nombre: 'Valentina Rojas',
      rut: '20.111.222-3',
      carrera: 'Ingeniería Civil Informática',
      materias: ['Cálculo', 'Álgebra', 'Programación'],
      descripcion: 'Estudiante de 4° año, apasionada por las matemáticas y la programación. Metodología clara y paciente.',
      valoracion: 4.8,
      precio: 8000,
      foto: '👩‍💻',
      disponible: true
    },
    {
      id: 2,
      nombre: 'Matías González',
      rut: '20.333.444-5',
      carrera: 'Pedagogía en Matemáticas',
      materias: ['Cálculo', 'Estadística', 'Física'],
      descripcion: 'Futuro profesor con vocación de enseñanza. Explico desde lo básico hasta lo avanzado.',
      valoracion: 4.9,
      precio: 7000,
      foto: '👨‍🏫',
      disponible: true
    },
    {
      id: 3,
      nombre: 'Camila Fuentes',
      rut: '20.555.666-7',
      carrera: 'Medicina',
      materias: ['Biología', 'Química', 'Anatomía'],
      descripcion: 'Estudiante de 3° año de medicina. Ayudo con ciencias básicas y preparación para exámenes.',
      valoracion: 4.7,
      precio: 9000,
      foto: '👩‍⚕️',
      disponible: false
    },
    {
      id: 4,
      nombre: 'Diego Muñoz',
      rut: '20.777.888-9',
      carrera: 'Derecho',
      materias: ['Derecho Civil', 'Derecho Penal', 'Redacción Jurídica'],
      descripcion: 'Ayudo a comprender textos legales y preparar casos. Enfoque práctico y ordenado.',
      valoracion: 4.6,
      precio: 8500,
      foto: '👨‍⚖️',
      disponible: true
    },
    {
      id: 5,
      nombre: 'Isidora Vega',
      rut: '20.999.000-1',
      carrera: 'Psicología',
      materias: ['Psicología General', 'Estadística', 'Investigación'],
      descripcion: 'Me especializo en metodología de investigación y estadística aplicada a ciencias sociales.',
      valoracion: 4.5,
      precio: 7500,
      foto: '🧠',
      disponible: true
    },
    {
      id: 6,
      nombre: 'Felipe Aravena',
      rut: '21.000.111-2',
      carrera: 'Ingeniería Civil Informática',
      materias: ['Bases de Datos', 'Redes', 'Programación Web'],
      descripcion: 'Desarrollador web y estudiante de último año. Enseño con proyectos reales y ejemplos prácticos.',
      valoracion: 4.9,
      precio: 10000,
      foto: '💻',
      disponible: true
    }
  ];

  // Retorna todos los tutores
  getTutores(): Tutor[] {
    return this.tutores;
  }

  // Retorna un tutor por ID
  getTutorById(id: number): Tutor | undefined {
    return this.tutores.find(t => t.id === id);
  }

  // Retorna carreras únicas para el filtro
  getCarreras(): string[] {
    return [...new Set(this.tutores.map(t => t.carrera))];
  }

  // Retorna materias únicas para el filtro
  getMaterias(): string[] {
    const todas = this.tutores.flatMap(t => t.materias);
    return [...new Set(todas)];
  }
}