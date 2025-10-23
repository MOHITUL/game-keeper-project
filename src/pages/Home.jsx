import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
    useEffect (() => {
        document.title = "Home | GAMEKEEPER";
    },[]);
    return (
        <div>
            
            <Carousel></Carousel>
        </div>
    );
};

export default Home;