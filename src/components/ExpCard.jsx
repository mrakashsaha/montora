import React from 'react';

const ExpCard = ({ cardData }) => {
    const { adventureTitle, image, ecoFriendlyFeatures } = cardData;
    console.log (ecoFriendlyFeatures);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <div className='w-full h-[250px]'>
                        <img src={image} alt="Shoes" className="w-full h-full object-cover rounded-xl" />
                    </div>
                </figure>
                <div className="card-body items-start">
                    <h2 className="card-title">{adventureTitle}</h2>
                        <ul>
                            {
                                ecoFriendlyFeatures.map ((x)=><li>{x}</li>)
                            }
                        </ul>
                    <div className="card-actions">
                        <button className="btn btn-primary">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpCard;