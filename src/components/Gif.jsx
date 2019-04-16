import React from 'react';

const gif = ({ gif, handleClick, imgSrc }) => {
  return (
    (typeof imgSrc !== 'undefined') ? (
      <img src={imgSrc} alt="the chosen one"/> 
    ) : (
      <img src={`https://media1.giphy.com/media/${gif}/200.gif`} alt="test embed" onClick={handleClick} />  
    )
  );
};

export default gif;
