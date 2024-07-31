import React from 'react';
import styles from './Contact.module.css';
import GoogleMapReact from 'google-map-react';

const Contact: React.FC = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <p className={styles.title}>КОНТАКТЫ</p>

                    <div className={styles.flex_cont}>
                        <div className={styles.map_block}>
                            {/* <img src='public\images\test_map.png' className={styles.map_img}/> */}
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5291b2584d04412835e34c139fe3b4715eda48f7ef82f0ee1726c058108e0e4e&amp;source=constructor" width="100%" height="100%"></iframe>
                        </div>

                        <div className={styles.labels_block_flex}>
                            <div className={styles.labels_block}>
                                <div className={styles.block}>
                                    <img src='public\images\Phone.svg' className={styles.icon}/>
                                    <p className={styles.text_num}>+7 (937) 726-58-88</p>
                                </div>

                                <div className={styles.block}>
                                    <img src='public\images\Map_Pin.svg' className={styles.icon}/>
                                    <p className={styles.text}>Волгоград, ул. 39-й Гвардейской Дивизии, 27</p>
                                </div>

                                <div className={styles.block}>
                                    <img src='public\images\Clock.svg' className={styles.icon}/>
                                    <p className={styles.text}>каждый день с 10:00 до 20:00</p>
                                </div>

                                <button className={styles.contact_btn}>
                                    ЗАПИСАТЬСЯ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;