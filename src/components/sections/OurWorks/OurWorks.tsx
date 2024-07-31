import React, { useState } from 'react';
import styles from './OurWorks.module.css';

const OurWorks: React.FC = () => {
    const [photo, setPhoto] = useState(photos[0]);
    const [activePhoto, setActivePhoto] = useState(0);

    const handleChangePhoto = (index: number) => {
        setPhoto(photos[index]);
        setActivePhoto(index);
    };

    return (
        <>
            <div className={styles.flex}>
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

                        <div className={styles.mobile_block}>
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

                        <div className={styles.mobile_default}>
                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[0] }/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[1] }/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[2] }/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[3] }/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[4] }/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[5] }/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[6] }/>
                            </div>

                            <div className={styles.photo_block}>
                                <img className={styles.photo} src={ photos[7] }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const photos = [
    'public/images/samplePhotoDefault.png',
    'public/images/test_map.png',
    'public/images/samplePhotoDefault.png',
    'public/images/samplePhotoDefault.png',
    'public/images/samplePhotoDefault.png',
    'public/images/samplePhotoDefault.png',
    'public/images/samplePhotoDefault.png',
    'public/images/samplePhotoDefault.png',
]

export default OurWorks;