import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import Footer from '../components/Footer'
import HeaderAccount from '../components/HeaderAccount'
import FooterMob from '../components/FooterMob'
import HeaderMobile from '../components/HeaderMobile'

const AccountLayout = () => {
    const isMobile = useIsMobile('1199px')

    return (
        <>
            <ScrollRestoration />
            {
                (isMobile)
                    ? <HeaderMobile />
                    : <HeaderAccount />
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

export default AccountLayout