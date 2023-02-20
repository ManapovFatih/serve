import React from 'react';
import SearchRoutes from '../routes/SearchRoutes';
import useIsMobile from '../hooks/isMobile';

const Search = () => {
  const {mobile} = useIsMobile('991px');
  return (
    <SearchRoutes isMobile={mobile}/>
  );
};

export default Search;