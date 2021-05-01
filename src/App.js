/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Tmdb from './services/APITmdb';
import './styles/App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista toda
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o featured
      let originals = list.filter(film => film.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen);
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      {featuredData &&
        <FeaturedMovie item={ featuredData } />
      }

      <sction className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={ key } title={ item.title } items={ item.items } />
          </div>
        ))}
      </sction>
    </div>
  );
}
