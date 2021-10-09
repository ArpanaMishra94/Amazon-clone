import React, {useState} from 'react';
import {SliderData} from './SliderData';
import './Slider.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export default function Slider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }
    return (
        <section className="slider">
            <ArrowBackIosIcon className="left-arrow"
                onClick={prevSlide}
                style={
                    {fontSize: '50px'}
                }/>
            <ArrowForwardIosIcon className="right-arrow"
                onClick={nextSlide}
                style={
                    {fontSize: '50px'}
                }/> {
            SliderData.map((Slide, index) => {
                return (
                    <div className= {index === current ? 'slide active' : 'slide'}
                        key={index}>
                        {
                        index === current && (
                            <img className="image"
                                src={
                                    Slide.image
                                }
                                alt=""/>
                        )
                    } </div>
                )
            })
        } </section>
    )
}
