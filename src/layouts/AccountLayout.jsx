import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Footer from '../components/Footer'
import HeaderAccount from '../components/HeaderAccount'
import Menu from '../pages/account/Menu'

const AccountLayout = () => {
    const {mobile} = useIsMobile('991px')

    return (
        <>
            <ScrollRestoration />
            <HeaderAccount/>
            <main className='py-4 py-sm-5'>
                <Container>
                    {
                        (mobile === true)
                        ? <Outlet />
                        : <Row>
                            <Col lg={3}>
                                <Menu/>
                            </Col>
                            <Col lg={9}>
                                <Outlet />
                            </Col>
                        </Row>
                    }
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default AccountLayout