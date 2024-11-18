import React, { useEffect, useState } from 'react';
import ExpCard from './ExpCard';

const AdvantureExp = () => {
    const [data, setData] = useState ([]);
    useEffect(() => {
        fetch('Data.json')
            .then(req => req.json())
            .then(res => setData(res));
    }, []);

    console.log (data);

    
    return (
        <div className='my-8'>
            <div>
                <h1 className='text-2xl font-semibold text-center uppercase'>Explore wonderful experience</h1>
                <p className='text-6xl font-bold text-center w-1/2 p-4 mx-auto'>Visit Popular Mountains of the World.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    data.map((x, idx)=> <ExpCard key={idx} cardData = {x}></ExpCard> )
                }
            </div>
        </div>
    );
};

export default AdvantureExp;