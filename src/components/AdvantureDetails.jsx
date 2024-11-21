import moment from 'moment';
import { SiGooglemeet } from 'react-icons/si';
import { useLoaderData, useParams } from 'react-router-dom';
import trip from '../assets/others/trip.png'
import PageTitle from './PageTitle';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


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
            // alert("The current time is outside the range.");
            document.getElementById('my_modal_5').showModal();
        }

    }

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="">
            <PageTitle title={'Montora | Advature Details'}></PageTitle>
            <div className="relative h-96 lg:h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${adventure.image})` }}>
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-5xl font-bold">{adventure.adventureTitle}</h1>
                    <p className="text-2xl font-medium">{adventure.categoryName}</p>
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-0 space-y-10 mt-4'>
                <div>
                    <h2 className="text-[#ff8900] text-5xl font-bold my-4 text-center pt-4">About the Adventure</h2>
                    <p className='text-3xl p-6 text-center mx-auto'>{adventure.shortDescription}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xl">
                    <div data-aos="fade-left" className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title">Location</h2>
                            <p>{adventure.location}</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title">Duration</h2>
                            <p>{adventure.duration}</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title">Cost</h2>
                            <p>${adventure.adventureCost}</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title">Group Size</h2>
                            <p>{adventure.maxGroupSize}</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title">Level</h2>
                            <p>{adventure.adventureLevel}</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title">Availability</h2>
                            <p>{adventure.bookingAvailability}</p>
                        </div>
                    </div>
                </div>



                <div data-aos="fade-left" className='grid grid-cols-1 md:grid-cols-3 gap-6 text-2xl'>
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
                    <div data-aos="fade-left" className="bg-base-100 shadow-md rounded-lg p-10">
                        <h2 className="text-2xl font-semibold mb-2">Eco-Friendly Features</h2>
                        <ul className="list-disc list-inside space-y-1">
                            {adventure.ecoFriendlyFeatures.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                    </div>

                    {/* Special Instructions Section */}
                    <div data-aos="fade-left" className="bg-base-100 shadow-md rounded-lg p-10">
                        <h2 className="text-2xl font-semibold mb-2">Special Instructions</h2>
                        <ul className="list-disc list-inside space-y-1">
                            {adventure.specialInstructions.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                    </div>
                </div>

            </div>
            {/* Footer Section */}
            <div className="mt-8 p-10 bg-gradient-to-b from-white via-[#b2f3de]/25 to-white rounded-lg flex-col-reverse flex md:flex-row justify-center gap-10 items-center">
                <div className='space-y-4'>
                    <p className='font-bold text-[#ff8900] uppercase text-lg md:text-2xl' >Plan your trip with us</p>
                    <p className='font-bold text-3xl md:text-5xl uppercase'>Ready for An <br />Unforgetable Tour?</p>
                    <button data-aos="fade-up" onClick={handleTalkWithExpert} className='text-lg text-white btn btn-lg bg-[#1ec28b] hover:bg-[#ff8900] rounded-full'><SiGooglemeet></SiGooglemeet>Talk with Expert</button>
                </div>
                <div data-aos="fade-up">
                    <img className='w-3/4' src={trip} alt="" />
                </div>
            </div>

            <dialog id="my_modal_5" className="modal modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Consultation Timing</h3>
                    <p className="py-4">Our experts are available between <strong>10:00 AM</strong> and{" "}
                        <strong>8:00 PM</strong>. Please visit during this time for live
                        consultations. Thank You!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AdvantureDetails;