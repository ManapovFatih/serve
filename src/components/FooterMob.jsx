import React from 'react'
import Container from 'react-bootstrap/Container'
import { SlBubbles, SlGrid, SlUser } from "react-icons/sl"
import { TfiPencilAlt } from "react-icons/tfi"
import {NavLink} from 'react-router-dom'

const FooterMob = () => {
    return (
        <footer className="mobile">
            <Container>
                <nav>
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/">
                                <SlGrid/>
                                <span>Главная</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <TfiPencilAlt/>
                                <span>Заказы</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <SlBubbles/>
                                <span>сообщения</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">
                                <SlUser/>
                                <span>Профиль</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>
    )
}

export default FooterMob