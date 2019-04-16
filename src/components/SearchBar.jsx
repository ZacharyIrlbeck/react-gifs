import React from 'react';

const search = ({ handleSearch }) => {
  return (
    <input type="search" onChange={handleSearch} />
  );
};

export default search;
