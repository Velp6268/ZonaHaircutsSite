import React from 'react';
import style from "./ServicesBlock.module.css"; // Corrected path
import clientServices1 from '/images/client_services_1.jpg';
import clientServices2 from '/images/client_services_2.jpg';
import clientServices3 from '/images/client_services_3.jpg';
import clientServices4 from '/images/client_services_4.jpg';

const ServicesBlock :React.FC = () => {
    return (
        <div className={style.container_info_block}>
            <div className={style.left_container}>
                <div className={style.container_item_for_left}>
                    <div className={style.text_left}>
                        <h1>СТРИЖКИ МУЖСКИЕ</h1>
                        <h2>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h2>
                        <a href="#our-works">Посмотреть примеры</a>
                    </div>
                    <div className={style.img_container_for_left}>
                        <img src={clientServices1} alt="samplePhoto1"/>
                    </div>
                </div>
                <div className={style.container_item_for_left}>
                    <div className={style.text_left}>
                        <h1>СТРИЖКИ МУЖСКИЕ</h1>
                        <h2>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h2>
                        <a href="#our-works">Посмотреть примеры</a>
                    </div>
                    <div className={style.img_container_for_left}>
                        <img src={clientServices2} alt="samplePhoto2"/>
                    </div>
                </div>
            </div>
            <div className={style.right_container}>
                <div className={style.container_item_for_right}>
                    <div className={style.img_container_for_right}>
                        <img src={clientServices3} alt="samplePhoto3"/>
                    </div>
                    <div className={style.text_right}>
                        <h1>СТРИЖКИ МУЖСКИЕ</h1>
                        <h2>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h2>
                        <a href="#our-works">Посмотреть примеры</a>
                    </div>
                </div>
                <div className={style.container_item_for_right}>
                    <div className={style.img_container_for_right}>
                        <img src={clientServices4} alt="samplePhoto4"/>
                    </div>
                    <div className={style.text_right}>
                        <h1>СТРИЖКИ МУЖСКИЕ</h1>
                        <h2>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h2>
                        <a href="#our-works">Посмотреть примеры</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesBlock;

