import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, MovieCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  movies: Movie[] = [];
  searchQuery = '';
  selectedMovie: Movie | null = null;

  @ViewChild('movieModal') movieModal!: TemplateRef<any>;

  constructor(private movieService: MovieService, private modalService: NgbModal) {
    this.movies = this.movieService.getMovies();
  }

  get filteredMovies(): Movie[] {
    return this.movieService.searchMovies(this.searchQuery);
  }

  openMovieModal(movie: Movie) {
    this.selectedMovie = movie;
    this.modalService.open(this.movieModal);
  }
}
