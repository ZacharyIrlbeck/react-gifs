import React from 'react';

const gif = (gifId) => {
  return (
    // <img src={`https://media.giphy.com/media/${id}/giphy.gif`} alt="testing" />
    <img src={`https://media1.giphy.com/media/${gifId.gifId}/200.gif`} alt="test embed" />
  );
};

export default gif;
