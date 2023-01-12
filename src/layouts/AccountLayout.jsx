import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Footer from '../components/Footer'
import HeaderAccount from '../components/HeaderAccount'
import Menu from '../pages/account/Menu'

const AccountLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <HeaderAccount/>
            <main className='py-5'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <Menu/>
                        </Col>
                        <Col md={9}>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default AccountLayout