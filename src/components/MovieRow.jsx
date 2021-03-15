import React from 'react';
import '../styles/MovieRow.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
  return(
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listArea">
          {items.results.length > 0 && items.results.map((item, key) => (
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
          ))}
      </div>
    </div>
  );
}