import React, { useState } from 'react';
import styles from './OurWorks.module.css';

// Import images individually
import clientOurWorksNewChild from '/images/client_ourworks_new_child.jpg'; // New child photo
import clientOurWorksNewIvan from '/images/client_ourworks_new_ivan.jpg';   // New Ivan photo
import clientOurWorks3 from '/images/client_ourworks_3.jpg';
import clientOurWorks4 from '/images/client_ourworks_4.jpg';
import clientOurWorks5 from '/images/client_ourworks_5.jpg';
import clientOurWorks6 from '/images/client_ourworks_6.jpg';
import clientOurWorks7 from '/images/client_ourworks_7.jpg';
import clientOurWorks8 from '/images/client_ourworks_8.jpg';

const photos = [
    clientOurWorksNewChild, // Replaced photo at index 0
    clientOurWorksNewIvan,  // Replaced photo at index 1
    clientOurWorks3,
    clientOurWorks4,
    clientOurWorks5,
    clientOurWorks6,
    clientOurWorks7,
    clientOurWorks8,
];

const OurWorks: React.FC = () => {
    const [photo, setPhoto] = useState(photos[0]);
    const [activePhoto, setActivePhoto] = useState(0);

    const handleChangePhoto = (index: number) => {
        setPhoto(photos[index]);
        setActivePhoto(index);
    };

    return (
        <>
            <div className={styles.flex} id="our-works"> {/* Added id for anchor link */}
                <div className={styles.container}>
                    <p className={styles.title}>НАШИ РАБОТЫ</p>

                    <div className={styles.flex_cont}>
                        <div className={styles.vertical_block}>
                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[0] } onClick={() => handleChangePhoto(0)} style={activePhoto === 0 ? {scale: '0.93', height: '95%'} : {scale: '1'}}/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[1] } onClick={() => handleChangePhoto(1)} style={activePhoto === 1 ? {scale: '0.93', height: '95%'} : {scale: '1'}}/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[2] } onClick={() => handleChangePhoto(2)} style={activePhoto === 2 ? {scale: '0.93', height: '95%'} : {scale: '1'}}/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[3] } onClick={() => handleChangePhoto(3)} style={activePhoto === 3 ? {scale: '0.93', height: '95%'} : {scale: '1'}}/>
                            </div>
                        </div>

                        <div className={styles.main_block}>
                            <img className={styles.photo} src={ photo }/>
                        </div>

                        <div className={styles.vertical_block}>
                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[4] } onClick={() => handleChangePhoto(4)} style={activePhoto === 4 ? {scale: '0.93', height: '95%'} : {scale: '1'}}/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[5] } onClick={() => handleChangePhoto(5)} style={activePhoto === 5 ? {scale: '0.93', height: '95%'} : {scale: '1'}}/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[6] } onClick={() => handleChangePhoto(6)} style={activePhoto === 6 ? {scale: '0.93', height: '95%'} : {scale: '1'}}/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[7] } onClick={() => handleChangePhoto(7)} style={activePhoto === 7 ? {scale: '0.93', height: '95%'} : {scale: '1'}}/>
                            </div>
                        </div>

                        {/* Mobile block uses the same logic, so it will also benefit from imported images */}
                        <div className={styles.mobile_block}>
                            {photos.map((p, index) => (
                                <div className={styles.photo_block} key={`mobile-photo-${index}`}>
                                    <img className={styles.photo} src={p} onClick={() => handleChangePhoto(index)} style={activePhoto === index ? {scale: '0.93', height: '95%'} : {scale: '1'}}/>
                                </div>
                            ))}
                        </div>

                        <div className={styles.mobile_default}>
                            {photos.map((p, index) => (
                                <div className={styles.photo_block} key={`mobile-default-photo-${index}`}>
                                    <img className={styles.photo} src={p}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurWorks;

