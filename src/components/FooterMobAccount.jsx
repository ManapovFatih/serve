import React from 'react'
import Container from 'react-bootstrap/Container'
import { SlUser } from "react-icons/sl"
import { TfiMore } from "react-icons/tfi"
import {NavLink} from 'react-router-dom'
import { IoFileTrayFullOutline } from "react-icons/io5"
import { RxIdCard } from "react-icons/rx"

const FooterMobAccount = () => {
    return (
        <footer className="mobile">
            <Container>
                <nav>
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/my-orders">
                                <IoFileTrayFullOutline/>
                                <span>Ваши заказы</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <RxIdCard/>
                                <span>Заказы</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">
                                <SlUser/>
                                <span>Профиль</span>
                            </NavLink>
                        </li>
                        <li>
                            <button type='button'>
                                <TfiMore/>
                                <span>Ещё</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>
    )
}

export default FooterMobAccount