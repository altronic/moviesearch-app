import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => (

  <div>

    {props.list.map((item,index) =>
      <MovieItem
        key={item.id+index}
        title={item.title}
        poster_path={item.poster_path}
      />
    )}
    
  </div>
);

export default MovieList;
