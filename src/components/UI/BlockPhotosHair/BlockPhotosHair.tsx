import React from 'react';
import style from "./BlockPhotosHair.module.css"

const BlockPhotosHair:React.FC = () => {
    const haircutPhoto= "./public/images/samplePhotoHaircut.png"
    return (
        <div className={style.image_container}>

            <div className={style.mobile_container}>
                <h1>ЧТО МЫ ДЕЛАЕМ</h1>
                <div className={style.mobile_container_icon}>
                    <img src="../../../../public/images/cutImage.png" alt="cutImage" className={style.img_icon}/>
                </div>

                <div className={style.description_container}>
                    <h1>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h1>
                </div>

            </div>

            <div className={style.img_haircut}>
                <img src={haircutPhoto} alt="hairtcut"/>
                <img src={haircutPhoto} alt="hairtcut2"/>
            </div>
        </div>
    );
};

export default BlockPhotosHair;