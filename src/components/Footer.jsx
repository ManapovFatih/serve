import { useTranslation } from 'react-i18next';
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RxCaretDown } from "react-icons/rx"
import AppLinks from './AppLinks'

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <Row xs={1} xl={2}>
                    <Col>
                        <nav className='menu'>
                            <ul>
                                <li><a href="/">{t('Создать заказ')}</a></li>
                                <li><a href="/">{t('Заказы')}</a></li>
                                <li><a href="/">{t('Дополнительные услуги')}</a></li>
                            </ul>
                            <ul>
                                <li><a href="/">{t('Как стать исполнителем')}</a></li>
                                <li><a href="/">{t('Написать в поддержку')}</a></li>
                                <li><a href="/">{t('Настройки уведомлений')}</a></li>
                            </ul>
                            <ul>
                                <li><a href="/">{t('Журнал')}</a></li>
                                <li><a href="/">{t('О сервисе')}</a></li>
                                <li><a href="/">{t('Партнерская программа')}</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col className='mt-4 mt-xl-0'>
                        <AppLinks />
                    </Col>
                </Row>
                <hr />
                <div className='bottom'>
                    <button type='button'>
                        <span>{t('Казань')}</span>
                        <RxCaretDown className='fs-15' />
                    </button>
                    <a href="/">{t('Все города')}</a>
                    <a href="/">{t('Пользовательское соглашение')}</a>
                    <span>© 2022–{currentYear} {t('Название компании')}</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer