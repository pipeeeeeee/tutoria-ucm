import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mensaje {
  texto: string;
  esBot: boolean;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  abierto = false;
  mensajes: Mensaje[] = [
    { texto: '¡Hola! Soy el Asistente TutorIA UCM 🤖. ¿En qué puedo ayudarte?', esBot: true }
  ];
  input = '';

  // Respuestas predefinidas del chatbot académico
  private respuestas: { [clave: string]: string } = {
    'tutor': 'Puedes buscar tutores en la sección "Tutores" y filtrar por materia o carrera. 👥',
    'precio': 'Los precios varían entre $7.000 y $10.000 CLP por hora según el tutor. 💵',
    'reserva': 'Ve al perfil del tutor y presiona "Enviar Solicitud de Reserva". 📅',
    'registro': 'Ve a "Registro" en el menú, elige tu rol (estudiante o tutor) y completa el formulario. ✏️',
    'materia': 'Tenemos tutorías en Cálculo, Programación, Biología, Derecho y más. 📚',
    'calculo': 'Para Cálculo, te recomiendo a Valentina Rojas o Matías González. ⭐',
    'ingles': 'Por el momento no tenemos tutores de inglés, ¡pero pronto los habrá! 🌍',
    'hola': '¡Hola! ¿En qué puedo ayudarte hoy? 😊',
    'gracias': 'De nada, fue un placer ayudarte 🙌',
  };

  toggleChatbot() {
    this.abierto = !this.abierto;
  }

  enviar() {
    if (!this.input.trim()) return;

    // Agregar mensaje del usuario
    this.mensajes.push({ texto: this.input, esBot: false });

    const pregunta = this.input.toLowerCase();
    this.input = '';

    // Buscar respuesta según palabras clave
    let respuesta = 'No tengo información sobre eso aún, pero puedes preguntar directamente a un tutor. 😊';
    for (const clave of Object.keys(this.respuestas)) {
      if (pregunta.includes(clave)) {
        respuesta = this.respuestas[clave];
        break;
      }
    }

    // Simular "typing" del bot
    setTimeout(() => {
      this.mensajes.push({ texto: respuesta, esBot: true });
    }, 700);
  }
}