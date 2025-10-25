import React from 'react';
import codImg from "../assets/Call of Duty Mobile1.jpg"
import codImg2 from "../assets/Mobile Legends Bang Bang1.jpg"
import codImg3 from "../assets/Fortnite Mobile1.jpg"
import codImg4 from "../assets/Free Fire1.jpg"

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full mt-18">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={codImg}
                        className="w-full h-150" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={codImg2}
                        className="w-full h-150" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={codImg3}
                        className="w-full h-150" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={codImg4}
                        className="w-full h-150" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* Trending Apps */}
            <div className='text-center mt-15'>
                <h1 className='font-semibold text-5xl italic'>Trending Games</h1>
                <p className='text-xl mt-5 opacity-50'>Explore All Trending Games on Market </p>
            </div>
        </div>
    );
};

export default Carousel;