import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'
import Footer from '../components/Footer'
import FooterMob from '../components/FooterMob'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import useIsMobile from '../hooks/isMobile'

const AppLayout = () => {
    const {mobile} = useIsMobile('991px')

    return (
        <>
            <ScrollRestoration />
            {
                (mobile) 
                ? <HeaderMobile/>
                : <Header />
            }
            <Outlet />
            <Footer />
            {
                (mobile) &&
                <FooterMob/>
            }
        </>
    )
}

export default AppLayout