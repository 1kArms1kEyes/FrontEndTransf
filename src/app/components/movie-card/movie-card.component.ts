import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() openModal = new EventEmitter<void>();

  onClick() {
    this.openModal.emit();
  }
}
