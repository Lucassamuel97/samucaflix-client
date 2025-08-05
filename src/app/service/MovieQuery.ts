import { gql } from '@apollo/client';
import { apolloClient } from '../../../lib/apolloClient';

export const GET_MOVIES_QUERY = gql`
  query GetMovies {
    movies {
      id
      title
      description
      yearLaunched
      link
      castMembers
      genres
      thumbFileURL
      bannerFileURL
      videoFileURL
      rating
    }
  }
`;

export const GET_MOVIES_BY_ID = gql`
  query GetMoviesById($id: ID!) {
    movie(id: $id) {
      id
      title
      description
      yearLaunched
      link
      castMembers
      genres
      thumbFileURL
      bannerFileURL
      videoFileURL
      rating
    }
  }
`;

export const GET_MOVIES_BY_GENRE = gql`
  query GetMoviesByGenre($genre: String!) {
    moviesByGenre(genre: $genre) {
      id
      title
      description
      yearLaunched
      link
      castMembers
      genres
      thumbFileURL
      bannerFileURL
      videoFileURL
      rating
    }
  }
`;

export const GetMoviesByGenre = async (
  genre: string,
  options: { _limit?: number } = { _limit: 10 }
) => {
  const limit = options._limit || 10;

  const { data } = await apolloClient.query({
    query: GET_MOVIES_BY_GENRE,
    variables: { genre, limit },
  });
  return data.moviesByGenre;
};

export const getFeaturedMovie = async (id: string) => {
  const { data } = await apolloClient.query({
    query: GET_MOVIES_BY_ID,
    variables: { id },
  });
  return data.movie;
};
