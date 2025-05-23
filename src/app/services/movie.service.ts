import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      genre: 'Sci-Fi',
      releaseDate: '2010',
      actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
      synopsis: 'A thief who steals corporate secrets...',
      review: 'Mind-bending and brilliantly executed.',
      image: 'inception.jpg',
      thumbnail: 'inception-thumb.jpg'
    },
     {
      id: 2,
      title: 'Lacasa',
      genre: 'Action',
      releaseDate: '2010',
      actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
      synopsis: 'A thief who steals corporate secrets...',
      review: 'Mind-bending and brilliantly executed.',
      image: 'inception.jpg',
      thumbnail: 'inception-thumb.jpg'
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  searchMovies(query: string): Movie[] {
    return this.movies.filter(m =>
      m.title.toLowerCase().includes(query.toLowerCase()) ||
      m.genre.toLowerCase().includes(query.toLowerCase())
    );
  }
}
