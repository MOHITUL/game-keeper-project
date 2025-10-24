import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import PopularGames from '../components/PopularGames';
import Newsletter from './Newsletter';

const Home = () => {
    useEffect (() => {
        document.title = "Home | GAMEKEEPER";
    },[]);
    return (
        <div>
            <Carousel></Carousel>
            <PopularGames></PopularGames>
            <Newsletter/>
        </div>
    );
};

export default Home;