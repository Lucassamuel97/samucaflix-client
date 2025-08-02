import { apiRequest, RequestOptions } from './ApiRequest';
import { Movie, Movies } from '../types /movie';


export const getMovieById = async (id: string): Promise<Movie> => {
  return apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: string): Promise<Movie> => {
  return apiRequest(`featured/${id}`);
};

export const getMoviesByGenre = async (
  genre: string,
  options?: RequestOptions
): Promise<Movies> => {
  return apiRequest(`movies`, { genres_like: genre }, options);
};

export const searchMovies = async (
  title: string = '',
  genre: string = '',
  options: RequestOptions = {
    _limit: 100,
  }
): Promise<Movies> => {
  // Se não há critérios de busca, retorna array vazio
  if ((!title || title.trim() === '') && (!genre || genre.trim() === '')) {
    return [];
  }
  
  const query: any = {};
  
  if (title && title.trim() !== '') {
    query.title_like = title;
  }
  
  if (genre && genre.trim() !== '') {
    query.genres_like = genre;
  }
  
  const movies = await apiRequest<Movies>(`movies`, query, options);
  
  // Filtro adicional no lado do cliente para garantir que a busca funcione
  if (title && title.trim() !== '') {
    return movies.filter((movie) => 
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  
  return movies;
};