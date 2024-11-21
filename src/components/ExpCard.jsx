import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExpCard = ({ cardData }) => {
    const {id, adventureTitle, image, ecoFriendlyFeatures } = cardData;

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div data-aos="fade-left">
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <div className='w-full h-[250px]'>
                        <img src={image} alt="image" className="w-full h-full object-cover rounded-xl" />
                    </div>
                </figure>
                <div className="card-body text-xl">
                    <h2 className="card-title text-center mx-auto text-2xl">{adventureTitle}</h2>
                        <ul className='mt-4'>
                            <h4 className='font-semibold'>Eco-Friendly Features:</h4>
                            {
                                ecoFriendlyFeatures.map ((x, idx)=><li className='list-disc list-inside space-y-1' key={idx}>{x}</li>)
                            }
                        </ul>
                    <div className="card-actions pt-4">
                        <Link to={`/adventure/${id}`} className="btn btn-primary w-full text-white border-none hover:bg-[#ff8900] bg-[#04335E]">Explore Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpCard;