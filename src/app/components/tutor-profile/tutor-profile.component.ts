import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TutorService } from '../../services/tutor.service';
import { Tutor } from '../../models/tutor.model';

@Component({
  selector: 'app-tutor-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {
  tutor: Tutor | undefined;
  reservaEnviada = false;

  constructor(
    private route: ActivatedRoute,
    private tutorService: TutorService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tutor = this.tutorService.getTutorById(id);
  }

  simularReserva() {
    this.reservaEnviada = true;
    // Aquí iría la llamada a una API real
    setTimeout(() => this.reservaEnviada = false, 4000);
  }
}