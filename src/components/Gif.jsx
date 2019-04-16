import React from 'react';

const gif = ({ id }) => {
  return (
    // <img src={`https://media.giphy.com/media/${id}/giphy.gif`} alt="testing" />
    <img src={`http://api.giphy.com/v1/gifs/${id}?api_key=YJX55XcfY5kziDCNt8AdN84EUvADhApg alt="test embed"`} alt="whatever" />
  );
};

export default gif;


