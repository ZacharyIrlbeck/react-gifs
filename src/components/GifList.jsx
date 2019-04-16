import React from 'react';
import Gif from './Gif';

const GifList = (gifDataObjs) => {
  if (Object.keys(gifDataObjs)) {
    return (
      gifDataObjs.gifs.map((each) => {
        return (
          <Gif gifId={each} key={each} />
        );
      })
    );
  } return (null);
};

export default GifList;
