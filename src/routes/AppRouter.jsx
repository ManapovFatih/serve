import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import AuthRoute from '../layouts/AuthRoute'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Search from '../pages/Search'
import AccountRouter from './AccountRouter'
import RegistrationPerformer from '../pages/Registration'
import Login from '../pages/auth/Login'


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="registrationPerformer" element={<RegistrationPerformer />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />

                <Route path="search/*" element={<Search />} />
                <Route
                    path="account/*"
                    element={
                        <AuthRoute>
                            <AccountRouter />
                        </AuthRoute>
                    }
                />
            </Route>
        </>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;