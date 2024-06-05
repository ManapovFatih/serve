import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../components/Footer'
import FooterMob from '../components/FooterMob'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import useIsMobile from '../hooks/isMobile'

const AppLayout = () => {
    const isMobile = useIsMobile('991px')

    return (
        <>
            <ScrollRestoration />
            {
                (isMobile)
                    ? <HeaderMobile />
                    : <Header />
            }
            <Outlet />
            {
                (isMobile === true) ?
                    <FooterMob />
                    :
                    <Footer />
            }
        </>
    )
}

export default AppLayout