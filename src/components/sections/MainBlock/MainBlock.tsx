import React from 'react';
import style from "./MainBlock.module.css";
import Header from "../Header/Header.tsx";

const MainBlock: React.FC = () => {

    return (
        <div className={style.main_container}>

            <Header/>

            <div className={style.main_block}>
                <div className={style.container_main_name}>
                    <h1>- ЗОНА -</h1>
                    <h1>СТРИЖЕК</h1>
                </div>

                <div className={style.container_icon}>
                    <img src="../../../../public/images/cutImage.png" alt="cutImage" className={style.img_icon}/>
                </div>

                <div className={style.description}>
                    <h1>ОКРАШИВАНИЕ • СТРИЖКИ • МАНИКЮР</h1>
                </div>
            </div>
        </div>
    );
};

export default MainBlock;

