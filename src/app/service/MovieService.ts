import { apiRequest, RequestOptions } from './ApiRequest';
import { Movie, Movies } from '../types/movie';


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
  // Busca todos os filmes primeiro
  const allMovies = await apiRequest<Movies>(`movies`, {}, { _limit: 1000 });
  
  // Filtra no lado do cliente para garantir que funcione com arrays de gêneros
  const filteredMovies = allMovies.filter((movie) => 
    movie.genres && movie.genres.some(g => 
      g.toLowerCase().includes(genre.toLowerCase())
    )
  );
  
  // Aplica as opções de paginação e limite
  const { page = 1, _limit = 10 } = options || {};
  const startIndex = (page - 1) * _limit;
  const endIndex = startIndex + _limit;
  
  return filteredMovies.slice(startIndex, endIndex);
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
  
  // Busca todos os filmes primeiro
  const allMovies = await apiRequest<Movies>(`movies`, {}, { _limit: 1000 });
  
  // Filtra no lado do cliente
  let filteredMovies = allMovies;
  
  if (title && title.trim() !== '') {
    filteredMovies = filteredMovies.filter((movie) => 
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  
  if (genre && genre.trim() !== '') {
    filteredMovies = filteredMovies.filter((movie) => 
      movie.genres && movie.genres.some(g => 
        g.toLowerCase().includes(genre.toLowerCase())
      )
    );
  }
  
  // Aplica as opções de paginação e limite
  const { page = 1, _limit = 100 } = options;
  const startIndex = (page - 1) * _limit;
  const endIndex = startIndex + _limit;
  
  return filteredMovies.slice(startIndex, endIndex);
};