import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import SearchLayout from '../layouts/SearchLayout';
import SearchMenu from '../pages/SearchMenu';
import Submenu from '../pages/Submenu';
import MyOrders from '../pages/MyOrders';
import ServiceOffersPage from '../pages/ServiceOffersPage';

const SearchRoutes = ({isMobile}) => {
  return (
    <Routes>
      <Route path="/" element={<SearchLayout/>}>
        {isMobile
          ? <Route index element={<Navigate to="category" replace={true} />} />
          : <Route index element={<Navigate to="category/:categoryId" replace={true} />} />
        }
        {
          isMobile
          ?<>
            <Route path='category' element={<SearchMenu/>}/>
            <Route path="category/:categoryId" element={<Submenu/>} />
          </>
          :<Route path='category' element={<SearchMenu/>}>
            <Route path=":categoryId" element={<Submenu/>} />
          </Route>
        }
        <Route path="offers" element={<ServiceOffersPage/>}/>
        <Route path="my-orders" element={<MyOrders/>}/>
      </Route>
    </Routes>
  );
};

export default SearchRoutes;