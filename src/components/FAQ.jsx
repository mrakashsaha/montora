import React, { useEffect } from 'react';
import { IoIosCheckboxOutline } from 'react-icons/io';

import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='container mx-auto px-4 md:px-0 my-8'>
            <div className='pb-8'>
                <h1 className='text-[#ff8900] text-lg md:text-2xl font-semibold text-center uppercase'>A Lot More Questions</h1>
                <p className='text-3xl md:text-4xl lg:text-6xl font-bold text-center md:w-3/4 lg:w-1/2 p-4 mx-auto'>FREQUENTLY ASKED</p>
            </div>
            <div data-aos="fade-right" className='text-white space-y-4'>
                <div className="collapse collapse-arrow rounded-none">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="bg-[#04335e] collapse-title text-xl font-medium inline-flex items-center gap-2"> <IoIosCheckboxOutline className='text-3xl'></IoIosCheckboxOutline> What is Montora?</div>
                    <div className="collapse-content bg-base-200 text-black">
                        <p className='pt-2 text-xl'>Montora is a blog-style web application dedicated to eco-adventure experiences. It showcases various eco-friendly travel options such as mountain treks, ocean dives, and more, helping users explore and plan their next sustainable adventure.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow rounded-none">
                    <input type="radio" name="my-accordion-3" />
                    <div className="bg-[#04335e] collapse-title text-xl font-medium inline-flex items-center gap-2"> <IoIosCheckboxOutline className='text-3xl'></IoIosCheckboxOutline> How do I book an adventure through Montora?</div>
                    <div className="collapse-content bg-base-200 text-black">
                        <p className='pt-2 text-xl'>Currently, Montora serves as a platform to explore eco-adventures. While direct bookings are not available, you can consult experts via the “Talk with Expert” feature to get assistance with planning.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow rounded-none">
                    <input type="radio" name="my-accordion-3" />
                    <div className="bg-[#04335e] collapse-title text-xl font-medium inline-flex items-center gap-2"> <IoIosCheckboxOutline className='text-3xl'></IoIosCheckboxOutline> Is Montora free to use?</div>
                    <div className="collapse-content bg-base-200 text-black">
                        <p className='pt-2 text-xl'>Yes, Montora is completely free for users to browse and explore eco-adventure options.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow rounded-none">
                    <input type="radio" name="my-accordion-3" />
                    <div className="bg-[#04335e] collapse-title text-xl font-medium inline-flex items-center gap-2"> <IoIosCheckboxOutline className='text-3xl'></IoIosCheckboxOutline> How can I consult an expert?</div>
                    <div className="collapse-content bg-base-200 text-black">
                        <p className='pt-2 text-xl'>To consult an expert, click on the "Talk with Expert" button available on the adventure details page. If it's between 10:00 AM and 8:00 PM, you’ll be redirected to a Google Meet link. Otherwise, a message will inform you of the next available consultation time.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow rounded-none">
                    <input type="radio" name="my-accordion-3" />
                    <div className="bg-[#04335e] collapse-title text-xl font-medium inline-flex items-center gap-2"> <IoIosCheckboxOutline className='text-3xl'></IoIosCheckboxOutline> Do I need an account to use Montora?</div>
                    <div className="collapse-content bg-base-200 text-black">
                        <p className='pt-2 text-xl'>Yes, an account is required to access private features like viewing detailed adventure pages or consulting experts. You can register quickly using your email or Google account.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow rounded-none">
                    <input type="radio" name="my-accordion-3" />
                    <div className="bg-[#04335e] collapse-title text-xl font-medium inline-flex items-center gap-2"> <IoIosCheckboxOutline className='text-3xl'></IoIosCheckboxOutline> What is eco-friendly travel?</div>
                    <div className="collapse-content bg-base-200 text-black">
                        <p className='pt-2 text-xl'>Eco-friendly travel emphasizes sustainability and minimal impact on the environment. Adventures highlighted on Montora follow these principles, such as reducing waste, respecting wildlife, and using sustainable resources.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow rounded-none">
                    <input type="radio" name="my-accordion-3" />
                    <div className="bg-[#04335e] collapse-title text-xl font-medium inline-flex items-center gap-2"> <IoIosCheckboxOutline className='text-3xl'></IoIosCheckboxOutline>How secure is my personal information?</div>
                    <div className="collapse-content bg-base-200 text-black">
                        <p className='pt-2 text-xl'>Montora uses Firebase for authentication and securely manages your data. We do not share your information with third parties.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;