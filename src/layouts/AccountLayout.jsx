import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import Footer from '../components/Footer'
import HeaderAccount from '../components/HeaderAccount'
import FooterMobAccount from '../components/FooterMobAccount'

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
                <FooterMobAccount/>
            }
        </>
    )
}

export default AccountLayout