import React from 'react';
import style from "./BlockPhotosHair.module.css"

const BlockPhotosHair:React.FC = () => {
    const haircutPhoto= "./public/images/samplePhotoHaircut.png"
    return (
        <div className={style.image_container}>
            <div className={style.img_haircut}>
                <img src={haircutPhoto} alt="hairtcut"/>
                <img src={haircutPhoto} alt="hairtcut2"/>
            </div>
        </div>
    );
};

export default BlockPhotosHair;