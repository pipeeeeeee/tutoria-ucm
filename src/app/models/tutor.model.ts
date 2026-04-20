export interface Tutor {
  id: number;
  nombre: string;
  rut: string;
  carrera: string;
  materias: string[];
  descripcion: string;
  valoracion: number;   // de 1 a 5
  precio: number;       // CLP por hora
  foto: string;         // URL o emoji placeholder
  disponible: boolean;
}