import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <p className={styles.title}>КОНТАКТЫ</p>

                    <div className={styles.flex_cont}>
                        <div className={styles.map_block}>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5291b2584d04412835e34c139fe3b4715eda48f7ef82f0ee1726c058108e0e4e&amp;source=constructor" width="100%" height="100%"></iframe>
                        </div>

                        <div className={styles.labels_block_flex}>
                            <div className={styles.labels_block}>
                                <div className={styles.block}>
                                    <img src={'/images/Phone.svg'} className={styles.icon}/>
                                    <p className={styles.text_num}>+7(960)884-98-78</p>
                                </div>

                                <div className={styles.block}>
                                    <img src={'/images/Map_Pin.svg'} className={styles.icon}/>
                                    <p className={styles.text}>Волгоград, ул. 39-й Гвардейской Дивизии, 27</p>
                                </div>

                                <div className={styles.block}>
                                    <img src={'/images/Clock.svg'} className={styles.icon}/>
                                    <p className={styles.text}>каждый день с 10:00 до 20:00</p>
                                </div>

                                <div className={`${styles.block} ${styles.telegram_block}`}>
                                    <img src={'/images/telegram_icon.png'} className={`${styles.icon_tg} ${styles.telegram_icon}`}/>
                                    <a href="https://t.me/kultura_barber" target="_blank" rel="noopener noreferrer" className={styles.text_link}>
                                        Мы в Telegram
                                    </a>
                                </div>

                                <a href="https://site.saby.ru/booking/980046b9-ad0d-4f7b-8237-8ab477d9b7dc?pointId=234" target="_blank" rel="noopener noreferrer" className={styles.contact_btn_link}>
                                    <button className={styles.contact_btn}>
                                        ЗАПИСАТЬСЯ
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

