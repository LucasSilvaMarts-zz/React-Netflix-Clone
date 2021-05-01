/* eslint-disable import/no-anonymous-default-export */
const API_KEY = 'ff1c97e901f41b87534018df4bd86f50';
const API_BASE = 'https://api.themoviedb.org/3';

/*
O que estou pegando???
- originais da netflix;
- recomendados (trending);
- em alta (top rated);
- ação;
- comédia;
- terror;
- romance;
- documentários;
*/


const basicFetch = async (endPoint) => {
  const request = await fetch(`${API_BASE}${endPoint}`);
  const json = await request.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213$language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        default:
          info = null;
        break;
      }
    }

    return info;
  }
}
