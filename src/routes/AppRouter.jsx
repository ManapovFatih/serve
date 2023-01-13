import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import MyOrders from '../pages/MyOrders'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import AccountLayout from '../layouts/AccountLayout'
import Index from '../pages/account/Index'
import Addresses from '../pages/account/Addresses'
import About from '../pages/account/About'

const router = createHashRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path="my-orders" element={<MyOrders/>}/>
            <Route path="*" element={<NotFound />}/>
        </Route>
        <Route path="account" element={<AccountLayout/>}>
            <Route index element={<Index/>}/>
            <Route path="addresses" element={<Addresses/>}/>
            <Route path="about" element={<About/>}/>
        </Route>
        </>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;