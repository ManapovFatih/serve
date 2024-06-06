import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import AuthRoute from '../layouts/AuthRoute'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Search from '../pages/Search'
import AccountRouter from './AccountRouter'
import RegistrationPerformer from '../pages/RegistrationPerformer'
import Login from '../pages/auth/Login'
import Registration from '../pages/auth/Registration'
import Recovery from '../pages/auth/Recovery'
import Activate from '../pages/auth/Activate'
import MessagesRouter from './MessagesRouter'


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route
                    path="registrationPerformer"
                    element={
                        <AuthRoute>
                            <RegistrationPerformer />
                        </AuthRoute>
                    }
                />
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="password" element={<Recovery />} />
                <Route
                    path="activate"
                    element={
                        <AuthRoute>
                            <Activate />
                        </AuthRoute>
                    }
                />
                <Route path="messages/*" element={
                    <AuthRoute>
                        <MessagesRouter />
                    </AuthRoute>
                } />
                <Route path="*" element={<NotFound />} />
            </Route >
            <Route path="search/*" element={<Search />} />
            <Route
                path="account/*"
                element={
                    <AuthRoute>
                        <AccountRouter />
                    </AuthRoute>
                }
            />

        </>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;