import React from 'react'
import {Outlet} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import Menu from '../pages/account/Menu'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProfileLayout = () => {
    const {mobile} = useIsMobile('991px')

    return (
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
    )
}

export default ProfileLayout