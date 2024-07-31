import React from 'react';
import styles from './OurTeam.module.css';

const OurTeam: React.FC = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <p className={styles.title}>КОМАНДА</p>

                    <div className={styles.flex_cont}>
                        <div className={styles.card}>
                            <img className={styles.photo} src='public\images\samplePhotoDefault.png'></img>
                            <div className={styles.name}>
                                <p className={styles.text}>Иван Иванов</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <img className={styles.photo} src='public\images\samplePhotoDefault.png'></img>
                            <div className={styles.name}>
                                <p className={styles.text}>Иван Иванов</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <img className={styles.photo} src='public\images\samplePhotoDefault.png'></img>
                            <div className={styles.name}>
                                <p className={styles.text}>Иван Иванов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;