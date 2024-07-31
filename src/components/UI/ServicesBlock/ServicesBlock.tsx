import React from 'react';
import style from "../../UI/ServicesBlock/ServicesBlock.module.css";

const ServicesBlock :React.FC = () => {
    return (
        <div className={style.container_info_block}>

            <div className={style.left_container}>
                <div className={style.container_item_for_left}>

                    <div className={style.text_left}>
                        <h1>СТРИЖКИ МУЖСКИЕ</h1>
                        <h2>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h2>
                        <a href="#">Посмотреть примеры</a>
                    </div>


                    <div className={style.img_container_for_left}>
                        <img src="/public/images/SamplePhotoServices.png" alt="samplePhoto"/>
                    </div>
                </div>

                <div className={style.container_item_for_left}>
                    <div className={style.text_left}>
                        <h1>СТРИЖКИ МУЖСКИЕ</h1>
                        <h2>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h2>
                        <a href="#">Посмотреть примеры</a>
                    </div>

                    <div className={style.img_container_for_left}>
                        <img src="/public/images/SamplePhotoServices.png" alt="samplePhoto"/>
                    </div>
                </div>
            </div>

            <div className={style.right_container}>
                <div className={style.container_item_for_right}>

                    <div className={style.img_container_for_right}>
                        <img src="/public/images/SamplePhotoServices.png" alt="samplePhoto"/>
                    </div>

                    <div className={style.text_right}>
                        <h1>СТРИЖКИ МУЖСКИЕ</h1>
                        <h2>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h2>
                        <a href="#">Посмотреть примеры</a>
                    </div>


                </div>

                <div className={style.container_item_for_right}>

                    <div className={style.img_container_for_right}>
                        <img src="/public/images/SamplePhotoServices.png" alt="samplePhoto"/>
                    </div>

                    <div className={style.text_right}>
                        <h1>СТРИЖКИ МУЖСКИЕ</h1>
                        <h2>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h2>
                        <a href="#">Посмотреть примеры</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesBlock;