import React from 'react';

const MovieItem = (props) => {

  let imagecode;
  if(!props.poster_path) {
    imagecode = <div className="no_image_holder">image not available</div>
  } else {
    imagecode = <img className="movie-image" src={"https://image.tmdb.org/t/p/w185" + props.poster_path} />
  }
  return (
    <div className="movie-card">
      <div className="content movie-title">{props.title}</div>
      <div className="content thumbarea">
        {imagecode}
      </div>
    </div>
  );

}
export default MovieItem;
