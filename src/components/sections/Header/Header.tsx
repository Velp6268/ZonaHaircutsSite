import React, { useState } from 'react';
import style from './Header.module.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={style.container}>
            <div className={`${style.burger} ${isMenuOpen ? style.active : ''}`} onClick={toggleMenu}>
                <span></span>
            </div>
            <div className={`${style.transparentHeader} ${isMenuOpen ? style.open : ''}`}>
                <div className={style.list_ui}>
                    <nav className={`${style.nav} ${isMenuOpen ? style.open : ''}`}>
                        <ul>
                            <li><a href="#services" onClick={closeMenu}>Услуги</a></li>
                            <li><a href="#ourTeam" onClick={closeMenu}>Команда</a></li>
                            <li><a href="#cases" onClick={closeMenu}>Кейсы</a></li>
                            <li><a href="#gallery" onClick={closeMenu}>Галерея</a></li>
                            <li><a href="#contacts" onClick={closeMenu}>Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={style.container_numphone}>
                <p>+7 (937) 726-58-88</p>
            </div>
        </div>
    );
};

export default Header;
