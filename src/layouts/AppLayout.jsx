import React from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import FooterMob from '../components/FooterMob'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import useIsMobile from '../hooks/isMobile'
import ScrollToTopButton from '../components/utils/ScrollToTopButton'

const AppLayout = () => {
    const isMobile = useIsMobile('991px')
    const location = useLocation();

    return (
        <>
            <ScrollRestoration />
            {
                (isMobile)
                    ? <HeaderMobile />
                    : <Header />
            }
            <ScrollToTopButton />
            <Outlet />
            {
                (isMobile === true) ?
                    <FooterMob />
                    :
                    !location.pathname.includes('/messages') && <Footer />
            }
        </>
    )
}

export default AppLayout