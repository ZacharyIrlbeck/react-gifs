import React from 'react';
import Gif from './Gif';

const GifList = ({ gifs, handleClick }) => {

  if (Object.keys(gifs).length > 0) {
    return (
      gifs.map((each) => {
        return (
          <Gif gif={each} key={each} handleClick={handleClick} />
        );
      })
    );
  }
  return (null);
};

export default GifList;
