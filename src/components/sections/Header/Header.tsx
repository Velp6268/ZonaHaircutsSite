import React from 'react';
import style from './Header.module.css';

const Header: React.FC = () => {
    return (

        <div className={style.container}>


            <div className={style.transparentHeader}>
                <div className={style.list_ui}>
                    <nav>
                        <ul className={style.navList}>
                            <li><a href="#services">Услуги</a></li>
                            <li><a href="#ourTeam">Команда</a></li>
                            <li><a href="#cases">Кейсы</a></li>
                            <li><a href="#gallery">Галерея</a></li>
                            <li><a href="#contacts">Контакты</a></li>
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
