/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import Tmdb from './services/APITmdb';
import './styles/App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista toda
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <sction className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </sction>
    </div>
  );
}
