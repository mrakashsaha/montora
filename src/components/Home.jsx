import React, { useEffect } from 'react';
import Banner from './Banner';

const Home = () => {
    useEffect(()=> {
        fetch ('Data.json')
        .then (req => req.json())
        .then (res => console.log(res));
    }, [])
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;