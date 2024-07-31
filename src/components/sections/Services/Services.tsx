import React from 'react';
import style from './Services.module.css'
import ServicesBlock from "../../UI/ServicesBlock/ServicesBlock.tsx";


const Services : React.FC= () => {
    return (
        <div className={style.flex}>

            <div className={style.header}>
                <h1>НАШИ УСЛУГИ</h1>
                <h2>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h2>
            </div>

            <ServicesBlock/>

        </div>
    );
};

export default Services;