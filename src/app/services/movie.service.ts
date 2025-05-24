import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 11,
      title: '12 Angry Men',
      genre: 'Drama',
      releaseDate: '1957-04-10',
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
      synopsis: 'Un jurado tiene la difícil tarea de decidir si un joven acusado de asesinato es culpable o no.',
      review: '12 Angry Men (12 hombres en pugna) es un drama judicial dirigido por Sidney Lumet. La trama se desarrolla casi por completo en una sala de jurado, donde doce hombres deben decidir el destino de un joven acusado de asesinato. Al principio, la mayoría cree en su culpabilidad, pero uno de los jurados siembra la duda razonable y comienza una intensa deliberación. Con diálogos potentes y una profunda exploración de los prejuicios, la justicia y la moral, la película es un clásico atemporal que demuestra el poder de la razón y la conciencia individual.',
      image: 'angry_men.jpg',
      thumbnail: 'angry_men-thumb.jpg'
    },
     {
      id: 12,
      title: 'The Lord of the Rings: The Return of the King',
      genre: 'Drama',
      releaseDate: '2003-12-17',
      actors: ['Elijah Wood', 'Viggo Mortensen','Ian McKellen'],
      synopsis: 'La épica conclusión de la trilogía, con la batalla final para destruir el Anillo y derrotar a Sauron.',
      review: 'The Lord of the Rings: The Return of the King (El Señor de los Anillos: El Retorno del Rey) es la épica conclusión de la trilogía dirigida por Peter Jackson. La historia sigue la batalla final por la Tierra Media mientras Frodo y Sam se acercan al Monte del Destino para destruir el Anillo Único. Con batallas impresionantes, momentos emotivos y un cierre poderoso para cada personaje, la película es una celebración del coraje, la amistad y la esperanza. Ganadora de 11 premios Óscar, es considerada una de las mejores películas de fantasía de todos los tiempos.',
      image: 'return_of_the_king.jpg',
      thumbnail: 'return_of_the_king-thumb.jpg'
    },
         {
      id: 30,
      title: 'The Good, the Bad and the Ugly',
      genre: 'Crime',
      releaseDate: '1966-12-23',
      actors: ['Clint Eastwood', 'Lee Van Cleef','Eli Wallach'],
      synopsis: 'Tres hombres buscan un tesoro en el viejo oeste, pero cada uno tiene sus propios intereses.',
      review: 'The Good, the Bad and the Ugly (El bueno, el feo y el malo) es un clásico del spaghetti western dirigido por Sergio Leone. Ambientada durante la Guerra de Secesión, sigue a tres pistoleros —el astuto Blondie, el despiadado Angel Eyes y el impredecible Tuco— que compiten por encontrar un tesoro escondido. Con una dirección estilizada, música legendaria de Ennio Morricone y duelos memorables, la película es una obra maestra del género, que combina tensión, humor y crítica social con maestría.',
      image: 'good_bad_ugly.jpg',
      thumbnail: 'good_bad_ugly-thumb.jpg'
    },
         {
      id: 7,
      title: 'Interstellar',
      genre: 'Sci-fi',
      releaseDate: '2014-11-07',
      actors: ['Matthew McConaughey', 'Anne Hathaway','Jessica Chastain'],
      synopsis: 'Unos exploradores viajan a través de un agujero de gusano para asegurar la supervivencia de la humanidad.',
      review: 'Interstellar es una épica de ciencia ficción dirigida por Christopher Nolan, que sigue a un grupo de astronautas en un viaje a través de un agujero de gusano en busca de un nuevo hogar para la humanidad. Con impresionantes efectos visuales y una trama emocionalmente compleja sobre el amor, el sacrificio y el tiempo, la película plantea preguntas filosóficas sobre la supervivencia y el destino. Es un viaje cinematográfico inolvidable que combina ciencia y emoción.',
      image: 'interstellar.jpg',
      thumbnail: 'interstellar-thumb.jpg'
    },
         {
      id: 5,
      title: 'Inception',
      genre: 'Sci-fi',
      releaseDate: '2010-07-16',
      actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt','Ellen Page'],
      synopsis: 'Un ladrón que roba secretos a través de la tecnología de compartir sueños.',
      review: 'Inception es un thriller de ciencia ficción dirigido por Christopher Nolan que explora el mundo de los sueños y la mente humana. Dom Cobb, un experto en robar secretos a través de los sueños, recibe una última misión: implantar una idea en la mente de un objetivo. Con una narrativa intrincada, efectos visuales impresionantes y una trama que desafía la percepción de la realidad, la película se convierte en un complejo y fascinante rompecabezas sobre el subconsciente y la realidad.',
      image: 'inception.jpg',
      thumbnail: 'inception-thumb.jpg'
    },
         {
      id: 3,
      title: 'The Dark Knight',
      genre: 'Action',
      releaseDate: '2008-07-18',
      actors: ['Christian Bale', 'Heath Ledger','Aaron Eckhart'],
      synopsis: 'Batman se enfrenta al Joker en una prueba psicológica y física.',
      review: 'The Dark Knight es una intensa y aclamada película de Christopher Nolan que redefine el cine de superhéroes. Batman enfrenta a su mayor desafío: el Joker, un criminal caótico que siembra el caos en Gotham. Con una actuación legendaria de Heath Ledger, la película explora el límite entre el bien y el mal, el sacrificio y la justicia. Es oscura, profunda y emocionante.',
      image: 'dark_knight.jpg',
      thumbnail: 'dark_knight-thumb.jpg'
    },
         {
      id: 20,
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      genre: 'Sci-fi',
      releaseDate: '1980-05-21',
      actors: ['Mark Hamill', 'Harrison Ford','Carrie Fisher'],
      synopsis: 'La lucha entre los rebeldes y el Imperio continúa, mientras Luke Skywalker enfrenta su destino.',
      review: 'Star Wars: Episode V – The Empire Strikes Back (Star Wars: Episodio V – El Imperio contraataca) es la segunda entrega de la trilogía original y una de las más aclamadas de la saga. Dirigida por Irvin Kershner, la historia sigue a Luke Skywalker mientras entrena con el maestro Yoda para convertirse en Jedi, mientras el Imperio, liderado por Darth Vader, persigue sin descanso a la Alianza Rebelde. Con un tono más oscuro, giros impactantes y un desarrollo profundo de los personajes, la película elevó el universo de Star Wars y dejó una huella imborrable en la historia del cine.',
      image: 'empire_strikes_back.jpg',
      thumbnail: 'empire_strikes_back-thumb.jpg'
    },
         {
      id: 19,
      title: 'One Flew Over the Cuckoo\'s Nest',
      genre: 'Drama',
      releaseDate: '1975-11-19',
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
      actors: ['Henry Fonda', 'JLee J. Cobb','Martin Balsam'],
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
