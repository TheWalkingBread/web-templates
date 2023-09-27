import Image from 'next/image'
import style from '@/styles/Carousel1.module.css'
import { data } from 'autoprefixer';
import { useState } from 'react';

export default function Carousel1({ images }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const imagesPerSlide = 2;
    const totalSlides = Math.ceil(images.length / imagesPerSlide);

    const goToPrevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(totalSlides - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }
    };

    const goToNextSlide = () => {
        if (activeSlide === totalSlides - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }
    };


    return (
        <div className={style.carousel1_container}>

            <p className={style.carousel1_t1}>OUR PARTNERS</p>
            <div className={style.carousel1_component}>
                <div className={style.carousel1_slides} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                    {images.map((image, index) => {
                        if (index % imagesPerSlide === 0) {
                            return (
                                <div key={index} className={style.carousel1_slide}>
                                    <img src={images[index]} alt={`Slide ${index + 1} Image 1`} />
                                    {images[index + 1] && <img src={images[index + 1]} alt={`Slide ${index + 1} Image 2`} />}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

                <button onClick={goToPrevSlide} className={style.carousel1_prev}>&lt;</button>
                <button onClick={goToNextSlide} className={style.carousel1_next}>&gt;</button>
            </div>

        </div >
    );
};