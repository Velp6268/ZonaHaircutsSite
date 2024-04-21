import React from 'react';
import style from './WhatWeDo.module.css'
import BlockPhotosHair from "../../UI/BlockPhotosHair/BlockPhotosHair.tsx";
import InfoBlockWhatWeDo from "../../UI/InfoBlockWhatWeDo/InfoBlockWhatWeDo.tsx";

const WhatWeDo: React.FC = () => {
    return (
        <div className={style.container}>
           <BlockPhotosHair/>
           <InfoBlockWhatWeDo/>
        </div>
    );
};

export default WhatWeDo;