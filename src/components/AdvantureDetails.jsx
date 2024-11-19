import moment from 'moment';
import { SiGooglemeet } from 'react-icons/si';
import { useLoaderData, useParams } from 'react-router-dom';


const AdvantureDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const adventure = data.find((data) => data.id == id);

    const handleTalkWithExpert = (e) => {
        e.preventDefault();
        // const now = new Date();

        // const currentHours = now.getHours();
        // const currentMinutes = now.getMinutes();


        // if (currentHours >= 10 && 20 >= currentHours) {
        //     if (currentHours == 20 && currentMinutes >= 1) {
        //         alert('Experts are not avialable please try in Time');
        //     }
        //     else {

        //         window.open('https://meet.google.com/nkx-dhsy-ivo', '_blank');
        //     }

        // }
        // else {
        //     alert('Experts are not avialable please try in Time');
        // }

        
        const now = moment();
        const startTime = moment('10:00 AM', 'h:mm A');
        const endTime = moment('8:00 PM', 'h:mm A');
        
        
        if (now.isBetween(startTime, endTime)) {
            window.open('https://meet.google.com/nkx-dhsy-ivo', '_blank');
          } 
          
          else {
            alert("The current time is outside the range.");
          }

    }

    return (
        <div className="space-y-10">
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${adventure.image})` }}>
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-5xl font-bold">{adventure.adventureTitle}</h1>
                    <p className="text-2xl font-medium">{adventure.categoryName}</p>
                </div>
            </div>

            <div>
                <h2 className="text-5xl font-bold my-4 text-center">About the Adventure</h2>
                <p className='text-3xl p-6 text-center mx-auto'>{adventure.shortDescription}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xl">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Location</h2>
                        <p>{adventure.location}</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Duration</h2>
                        <p>{adventure.duration}</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Cost</h2>
                        <p>${adventure.adventureCost}</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Group Size</h2>
                        <p>{adventure.maxGroupSize}</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Level</h2>
                        <p>{adventure.adventureLevel}</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Availability</h2>
                        <p>{adventure.bookingAvailability}</p>
                    </div>
                </div>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-2xl'>
                {/* Included Items Section */}
                <div className="bg-base-100 shadow-md rounded-lg p-10">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">What's Included</h2>
                        <ul className="list-disc list-inside space-y-1">
                            {adventure.includedItems.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                {/* Eco-Friendly Features Section */}
                <div className="bg-base-100 shadow-md rounded-lg p-10">
                    <h2 className="text-2xl font-semibold mb-2">Eco-Friendly Features</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {adventure.ecoFriendlyFeatures.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                </div>

                {/* Special Instructions Section */}
                <div className="bg-base-100 shadow-md rounded-lg p-10">
                    <h2 className="text-2xl font-semibold mb-2">Special Instructions</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {adventure.specialInstructions.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                </div>
            </div>

            {/* Footer Section */}
            <div className=" text-2xl bg-primary text-white p-4 rounded-lg flex items-center justify-around">
                <div>
                    <p>Looking for consultancy?</p>
                    <p>Time: 10:00am - 8:00pm</p>
                </div>
                <div>
                    <button onClick={handleTalkWithExpert} className='btn text-3xl'><SiGooglemeet></SiGooglemeet>  Talk with Expert</button>
                </div>
            </div>
        </div>
    );
};

export default AdvantureDetails;