import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import PopularGames from '../components/PopularGames';

const Home = () => {
    useEffect (() => {
        document.title = "Home | GAMEKEEPER";
    },[]);
    return (
        <div>
            <Carousel></Carousel>
            <PopularGames></PopularGames>
        </div>
    );
};

export default Home;