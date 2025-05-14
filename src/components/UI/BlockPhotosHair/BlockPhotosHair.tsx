import React from 'react';
import style from "./BlockPhotosHair.module.css";
import clientWhatWeDo1 from '/images/client_whatwedo_1.jpg';
import clientWhatWeDo2 from '/images/client_whatwedo_2.jpg';
import cutImage from '/images/cutImage.png'; // Assuming cutImage.png is also in public/images

const BlockPhotosHair:React.FC = () => {
    return (
        <div className={style.image_container}>
            <div className={style.mobile_container}>
                <h1>ЧТО МЫ ДЕЛАЕМ</h1>
                <div className={style.mobile_container_icon}>
                    <img src={cutImage} alt="cutImage" className={style.img_icon}/>
                </div>
                <div className={style.description_container}>
                    <h1>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h1>
                </div>
            </div>
            <div className={style.img_haircut}>
                <img src={clientWhatWeDo1} alt="hairtcut"/>
                <img src={clientWhatWeDo2} alt="hairtcut2"/>
            </div>
        </div>
    );
};

export default BlockPhotosHair;
