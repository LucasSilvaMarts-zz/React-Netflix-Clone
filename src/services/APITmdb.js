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

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: []
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: []
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: []
      },
      {
        slug: 'action',
        title: 'Ação',
        items: []
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: []
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: []
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: []
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: []
      },
    ];
  }
}