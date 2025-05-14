import React from 'react';
import style from "../..//UI/InfoBlockWhatWeDo/InfoBlockWhatWeDo.module.css";

const InfoBlockWhatWeDo: React.FC = () => {
    const bookingLink = "https://site.saby.ru/booking/980046b9-ad0d-4f7b-8237-8ab477d9b7dc?pointId=234";

    return (
        <div className={style.info_block}>

            <div className={style.container_info_block}>
                <h1>ЧТО МЫ ДЕЛАЕМ</h1>
                <div className={style.container_icon}>
                    <img src="../../../../public/images/cutImage.png" alt="cutImage" className={style.img_icon}/>
                </div>

                <div className={style.description_container}>
                    <h1>Как уже неоднократно упомянуто, ключевые особенности структуры проекта ограничены.</h1>
                    <h2>Но курс на социально-ориентированный национальный проект требует от нас анализа системы
                        обучения кадров, соответствующей насущным потребностям. Принимая во внимание показатели
                        успешности, базовый вектор развития обеспечивает широкому.</h2>
                </div>

                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className={style.button_link}>
                    <button>
                        ЗАПИСАТЬСЯ
                    </button>
                </a>

            </div>

            <div className={style.mobile_container_info_block}>
                <div className={style.mobile_description}>
                    <h2>Но курс на социально-ориентированный национальный проект требует от нас анализа системы
                        обучения кадров, соответствующей насущным потребностям. Принимая во внимание показатели
                        успешности, базовый вектор развития обеспечивает широкому.</h2>
                </div>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className={`${style.mobile_btn_link} ${style.button_link}`}>
                    <button className={style.mobile_btn}>
                        ЗАПИСАТЬСЯ
                    </button>
                </a>
            </div>

        </div>
    );
};

export default InfoBlockWhatWeDo;
