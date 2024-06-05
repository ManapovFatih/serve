import React from 'react';
import SearchRoutes from '../routes/SearchRoutes';
import useIsMobile from '../hooks/isMobile';

const Search = () => {
  const isMobile = useIsMobile('991px');
  return (
    <SearchRoutes isMobile={isMobile} />
  );
};

export default Search;