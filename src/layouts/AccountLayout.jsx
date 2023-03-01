import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import Footer from '../components/Footer'
import HeaderAccount from '../components/HeaderAccount'
import FooterMob from '../components/FooterMob'
import HeaderMobile from '../components/HeaderMobile'

const AccountLayout = () => {
    const {mobile} = useIsMobile('1199px')

    return (
        <>
            <ScrollRestoration />
            {
                (mobile) 
                ? <HeaderMobile/>
                : <HeaderAccount />
            }
            <Outlet />
            <Footer />
            {
                (mobile === true) &&
                <FooterMob/>
            }
        </>
    )
}

export default AccountLayout