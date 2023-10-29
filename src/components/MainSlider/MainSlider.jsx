import React, { useEffect, useState } from 'react';
import '../MainSlider/mainSlider.scss';
import data from '../../data/data.json';

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (newSlideIndex) => {
        if (newSlideIndex < 0) {
            setCurrentSlide(data.slides.length - 1);
        } else if (newSlideIndex >= data.slides.length) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(newSlideIndex);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            changeSlide(currentSlide + 1);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        }
    }, [currentSlide])

    return (
        <div className='main-slider'>
            <div className="main-slider__slides">
                {data.slides.map((el, index) => (
                    <div className={`main-slider__slide ${index === currentSlide ? 'main-slider__slide-active' : ''}`} key={index}>
                        <img src={el.img} alt={el.alt} />
                    </div>
                ))}
            </div>
            <div className="main-slider__btns">
                <div className="main-slider__btns-container main-slider__btns-container-left">
                    <div 
                        className='main-slider__btns-prev'
                        onClick={() => changeSlide(currentSlide - 1)}
                    >
                        <img src="img/slider/icons/btn-left.svg" alt="button-left" />
                    </div>
                </div>
                <div className="main-slider__btns-container main-slider__btns-container-right">
                    <div 
                        className='main-slider__btns-next' 
                        onClick={() => changeSlide(currentSlide + 1)}
                    ><img src="img/slider/icons/btn-rigth.svg" alt="button-right" /></div>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;