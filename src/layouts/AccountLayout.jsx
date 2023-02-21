import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import Footer from '../components/Footer'
import HeaderAccount from '../components/HeaderAccount'
import FooterMob from '../components/FooterMob'

const AccountLayout = () => {
    const {mobile} = useIsMobile('991px')

    return (
        <>
            <ScrollRestoration />
            <HeaderAccount/>
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