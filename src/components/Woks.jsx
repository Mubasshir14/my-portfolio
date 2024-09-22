import proj1 from '../assets/Plant.png';
import proj2 from '../assets/ar1.png';
import mos from '../assets/mosaic.png'
import l from '../assets/limitless.png'
import g from '../assets/gadget.png'
import e from '../assets/eco.png'
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';


export const Woks = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [artis, setArtis] = useState(false);
    const [mosaic, setMosaic] = useState(false);
    const [limit, setLimit] = useState(false);
    const [gadget, setGadget] = useState(false);
    const [shopp, setShopp] = useState(false);

    const text = "Welcome to Plan A Plant 🌱🪴 – your dynamic destination for all things plants! 🚀🌿 Explore our sleek, interactive platform where you can find the perfect plants and gardening tips. Join us and grow your green thumb today!";

    const at = "Welcome to ArtistryCrafts 🎨🖌️ – your vibrant hub for all things arts and crafts! 🚀✨ Discover our sleek, interactive platform where creativity flourishes and crafting dreams come to life. Join us and unleash your artistic potential today!";

    const mo = "Welcome to My Blog Site 📚✨ – your go-to platform for diverse content! 🚀📰 Explore with Category Tabs, stay updated with Latest & Most Read Blogs, and interact through our Comments Section. Track your progress with Mark as Read and visualize your reading habits on the Stats Page. Join us and enhance your reading experience!";

    const lim = "Welcome to Limitless Bangladesh 🌍🏞 – your ultimate guide to exploring top tourist spots! 🚀🗺️ Discover places by division, get travel tips, and explore famous sites with detailed descriptions, images, and maps. Enjoy theme switching, smooth navigation, and a helpful FAQ section. Built with React.js, Node.js, Express.js, and Swiper Slider, this project brings Bangladesh’s wonders to your fingertips. Start your adventure today!";

    const gad = "GadgetHome is a comprehensive e-commerce platform designed for tech enthusiasts, offering a seamless shopping experience. Built with React.js on the frontend and MongoDB, Express.js, and Node.js on the backend, it delivers fast, responsive performance. The platform uses SweetAlert for interactive notifications and Swiper Slider for smooth content transitions, enhancing user engagement.With SSLCommerz integration, GadgetHome provides secure payment processing, allowing users to browse, select, and purchase products with confidence. After transactions, users can download detailed payment and order confirmations. The intuitive search and sort features help users find products easily, while the product review functionality allows them to share feedback and make informed choices.GadgetHome also includes a robust admin panel for managing products, updating information, and overseeing user orders, ensuring efficient workflow management and high user satisfaction."

    const eco ="SHOP.P is a comprehensive e-commerce platform designed to deliver a seamless shopping experience for users and powerful management tools for admins. Users can easily search for products, filter by category, price, or alphabetically, view detailed product information, and leave reviews. The platform offers secure payments via Stripe, and users can track their order status from pending to shipped with real-time notifications. Admins can manage products, update order statuses, and oversee admin roles with a dedicated admin panel. Built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database, SHOP.P incorporates Tailwind CSS for styling, and features libraries like SweetAlert2, Swiper JS, and React Icons for enhanced user interaction"


    const handleToggle4 = () => {
        setLimit(!limit);
    };

    const handleToggle1 = () => {
        setIsExpanded(!isExpanded);
    };

    const handleToggle2 = () => {
        setArtis(!artis);
    }

    const handleToggle3 = () => {
        setMosaic(!mosaic);
    }
    const handleToggle5 = () => {
        setGadget(!gadget);
    }
    const handleToggle6 = () => {
        setShopp(!shopp);
    }


    return (
        <div className='max-w-[1200px] mx-auto p-5' id='work'>
            <div className="pb-8 text-center">
                <p className='text-4xl mb-3 font-bold primary-color'>Project</p>
                <p className='text-gray-400'>Check Out Some Of My Project</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* ____________- */}
                <div className='border-2 rounded-lg p-2'>
                    <div className='transform  transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                        <img src={e} alt="" className='' />

                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href="https://e-commerce-586e1.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg uppercase'>SHOP.P - Dynamic Ecommerce Website with React.js</button></a>
                                <a target="_blank" href="https://e-commerce-586e1.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                            </div>


                        </div>

                    </div>
                    {/*  */}
                    <div>
                        <div className=''>
                            <h1 className=' rounded-lg text-xl  m-2 primary-color font-bold '>SHOP.P </h1>
                        </div>
                        <div>
                            <div className='rounded-lg m-2 mt-0 font-semibold text-lg text-gray-300'>
                            <div className='rounded-lg m-2 mt-0 font-semibold text-lg text-gray-300'>
                                <p>
                                    {shopp ? eco : `${eco.substring(0, 30)}...`}
                                </p>
                                <button
                                    onClick={handleToggle6}
                                    className='text-blue-500 underline mt-2'
                                >
                                    {shopp ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white font-bold text-xl my-2'>Technology Used</h1>
                            <div>
                                <ul className='grid grid-cols-3 text-center gap-2 md:gap-3  text-sm'>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Swiper Slider</li>

                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Sweetalert2</li>
                                    {/* <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React Tabs</li> */}
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Node.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Express.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>MongoDB</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Firebase</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>JWT</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>STRIPE</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-6  items-center my-2'>
                            <h1 className='text-xl font-bold text-white'>Link</h1>
                            <div className='flex items-center gap-6'>
                                <a target="_blank" href="https://e-commerce-586e1.web.app" className='text-xl text-white'>🔗</a>
                                <a target="_blank" href="https://github.com/Mubasshir14/ecommerce-shop.p" className='text-white text-xl'><FaGithub /></a>
                            </div>
                        </div>

                    </div>

                </div>

                {/* ----------project number 1---------- */}
                <div className='border-2 rounded-lg p-2'>
                    <div className='transform  transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                        <img src={g} alt="" className='' />

                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href="https://gadget-home-c03d3.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg uppercase'>GadgetHome - Dynamic Ecommerce Website with React.js</button></a>
                                <a target="_blank" href="https://gadget-home-c03d3.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                            </div>


                        </div>

                    </div>
                    {/*  */}
                    <div>
                        <div className=''>
                            <h1 className=' rounded-lg text-xl  m-2 primary-color font-bold '>GadGetHome </h1>
                        </div>
                        <div>
                            <div className='rounded-lg m-2 mt-0 font-semibold text-lg text-gray-300'>
                            <div className='rounded-lg m-2 mt-0 font-semibold text-lg text-gray-300'>
                                <p>
                                    {gadget ? gad : `${gad.substring(0, 30)}...`}
                                </p>
                                <button
                                    onClick={handleToggle5}
                                    className='text-blue-500 underline mt-2'
                                >
                                    {gadget ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white font-bold text-xl my-2'>Technology Used</h1>
                            <div>
                                <ul className='grid grid-cols-3 text-center gap-2 md:gap-3  text-sm'>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Swiper Slider</li>

                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Sweetalert2</li>
                                    {/* <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React Tabs</li> */}
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Node.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Express.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>MongoDB</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Firebase</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>JWT</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>SSLCOMMERZ</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-6  items-center my-2'>
                            <h1 className='text-xl font-bold text-white'>Link</h1>
                            <div className='flex items-center gap-6'>
                                <a target="_blank" href="https://gadget-home-c03d3.web.app" className='text-xl text-white'>🔗</a>
                                <a target="_blank" href="https://github.com/Mubasshir14/gadget-home" className='text-white text-xl'><FaGithub /></a>
                            </div>
                        </div>

                    </div>

                </div>

                {/* ----------project2--------------- */}

                <div className='border-2 rounded-lg p-2'>
                    <div className='transform  transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                        <img src={proj1} alt="" className='' />

                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href="https://plant-d07cf.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg uppercase'>Plan A Plant - Dynamic Plant Website with React.js</button></a>
                                <a target="_blank" href="https://plant-d07cf.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                            </div>


                        </div>

                    </div>
                    {/*  */}
                    <div>
                        <div className=''>
                            <h1 className=' rounded-lg text-xl  m-2 primary-color font-bold '>Plan A Plant </h1>
                        </div>
                        <div>
                            <div className='rounded-lg m-2 mt-0 font-semibold text-lg text-gray-300'>
                                <p>
                                    {isExpanded ? text : `${text.substring(0, 30)}...`}
                                </p>
                                <button
                                    onClick={handleToggle1}
                                    className='text-blue-500 underline mt-2'
                                >
                                    {isExpanded ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white font-bold text-xl my-2'>Technology Used</h1>
                            <div>
                                <ul className='grid grid-cols-3 text-center gap-2 md:gap-3  text-sm'>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Swiper Slider</li>

                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Sweetalert2</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React Tabs</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Node.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Express.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>MongoDB</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Firebase</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-6  items-center my-2'>
                            <h1 className='text-xl font-bold text-white'>Link</h1>
                            <div className='flex items-center gap-6'>
                                <a target="_blank" href="https://plant-d07cf.web.app" className='text-xl text-white'>🔗</a>
                                <a target="_blank" href="https://github.com/Mubasshir14/plant" className='text-white text-xl'><FaGithub /></a>
                            </div>
                        </div>

                    </div>

                </div>


                {/* ----------------project3------------------------- */}
                <div className='border-2 rounded-lg p-2'>
                    <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                        <img src={proj2} alt="" />

                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href="https://artistry-crafts.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg uppercase'>ArtistryCrafts - dynamic Arts & Crafts Store</button></a>
                                <a target="_blank" href="https://artistry-crafts.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                            </div>

                        </div>

                    </div>
                    <div>
                        <div className=''>
                            <h1 className=' rounded-lg text-xl  m-2 primary-color font-bold '>ArtistryCrafts </h1>
                        </div>
                        <div>
                            <div className='rounded-lg m-2 mt-0 font-semibold text-lg text-gray-300'>
                                <p>
                                    {artis ? at : `${at.substring(0, 30)}...`}
                                </p>
                                <button
                                    onClick={handleToggle2}
                                    className='text-blue-500 underline mt-2'
                                >
                                    {artis ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white font-bold text-xl my-2'>Technology Used</h1>
                            <div>
                                <ul className='grid grid-cols-3 text-center gap-2 md:gap-3 text-sm '>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Swiper Slider</li>

                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Sweetalert2</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Node.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Express.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>MongoDB</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Firebase</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-6  items-center my-2'>
                            <h1 className='text-xl font-bold text-white'>Link</h1>
                            <div className='flex items-center gap-6'>
                                <a target="_blank" href="https://artistry-crafts.web.app" className='text-xl text-white'>🔗</a>
                                <a target="_blank" href="https://github.com/Mubasshir14/artistry-craft" className='text-white text-xl'><FaGithub /></a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --------------project4-------------------- */}
                <div className='border-2 rounded-lg p-2'>
                    <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                        <img src={mos} alt="" />

                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href="https://mindful-mosaic.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg uppercase'>Mindful Mosaic - dynamic Blog Site</button></a>
                                <a target="_blank" href="https://artistry-crafts.web.app"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                            </div>

                        </div>

                    </div>
                    <div>
                        <div className=''>
                            <h1 className=' rounded-lg text-xl  m-2 primary-color font-bold '>Mindful Mosaic </h1>
                        </div>
                        <div>
                            <div className='rounded-lg m-2 mt-0 font-semibold text-lg text-gray-300'>
                                <p>
                                    {mosaic ? mo : `${mo.substring(0, 30)}...`}
                                </p>
                                <button
                                    onClick={handleToggle3}
                                    className='text-blue-500 underline mt-2'
                                >
                                    {mosaic ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white font-bold text-xl my-2'>Technology Used</h1>
                            <div>
                                <ul className='grid grid-cols-3 text-center gap-2 md:gap-3  text-sm'>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Swiper Slider</li>

                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Sweetalert</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React Tabs</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Node.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Express.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>MongoDB</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Firebase</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-6  items-center my-2'>
                            <h1 className='text-xl font-bold text-white'>Link</h1>
                            <div className='flex items-center gap-6'>
                                <a target="_blank" href="https://mindful-mosaic.web.app" className='text-xl text-white'>🔗</a>
                                <a target="_blank" href="https://github.com/Mubasshir14/mindful-mosaic-client1" className='text-white text-xl'><FaGithub /></a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ----------------------------------- */}



                {/* -------------project5--------------------- */}
                <div className='border-2 rounded-lg p-2'>
                    <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
                        <img src={l} alt="" />
                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noopener noreferrer" href="https://limitless-bangladesh.netlify.app/">
                                    <button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg uppercase'>
                                        Limitless Bangladesh - Discover Top Tourist Spots in a Dynamic Guide
                                    </button>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://limitless-bangladesh.netlify.app/">
                                    <button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='rounded-lg text-xl m-2 primary-color font-bold'>Limitless Bangladesh</h1>
                        </div>
                        <div>
                            <div className='rounded-lg m-2 mt-0 font-semibold text-lg text-gray-300'>
                                <p>
                                    {limit ? lim : `${lim.substring(0, 30)}...`}
                                </p>
                                <button
                                    onClick={handleToggle4}
                                    className='text-blue-500 underline mt-2'
                                >
                                    {limit ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white font-bold text-xl my-2'>Technology Used</h1>
                            <div>
                                <ul className='grid grid-cols-3 text-center gap-2 md:gap-3 text-sm'>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Swiper Slider</li>

                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>React Tabs</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Node.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Express.js</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>MongoDB</li>
                                    <li className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>Sweetalert</li>

                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center my-2'>
                            <h1 className='text-xl font-bold text-white'>Link</h1>
                            <div className='flex items-center gap-6'>
                                <a target="_blank" rel="noopener noreferrer" href="https://limitless-bangladesh.netlify.app/" className='text-xl text-white'>🔗</a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mubasshir14/limitless-bangladesh" className='text-white text-xl'>
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------------------------- */}

                {/* <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                    <img src={three} alt="" />

                    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                        <span className='text-2xl font-bold text-white tracking-wider'></span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" href="https://simple-e-commerse-website.netlify.app/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>E-COMMERCE WEBSITE WITH REACT.JS</button></a>
                            <a target="_blank" href="https://simple-e-commerse-website.netlify.app/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                        </div>

                    </div>

                </div> */}

            </div>
            {/* <div className='flex justify-center mt-4'>
                
                <div className='flex flex-col border-2 rounded-lg p-2 w-full sm:w-1/2 md:w-1/3'>
                    <div className='flex-1 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
                        <img src={l} alt="Limitless Bangladesh" className='w-full h-full object-cover' />
                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                            <div className='pt-8 text-center'>
                                <a target="_blank" href="https://limitless-bangladesh.web.app" rel="noopener noreferrer">
                                    <button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg uppercase'>
                                        Limitless Bangladesh - Tourist Spot Guide
                                    </button>
                                </a>
                                <a target="_blank" href="https://limitless-bangladesh.web.app" rel="noopener noreferrer">
                                    <button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h1 className='rounded-lg text-xl m-2 primary-color font-bold'>Limitless Bangladesh</h1>
                        <div className='rounded-lg m-2 font-semibold text-lg text-gray-300'>
                            <p>{limit ? lim : `${lim.substring(0, 100)}...`}</p>
                            <button onClick={handleToggle4} className='text-blue-500 underline mt-2'>
                                {limit ? 'Show less' : 'Show more'}
                            </button>
                        </div>
                        <div>
                            <h1 className='text-white font-bold text-xl my-2'>Technology Used</h1>
                            <ul className='flex flex-wrap gap-3'>
                                {['React.js', 'Swiper Slider', 'Node.js', 'Express.js', 'MongoDB'].map(tech => (
                                    <li key={tech} className='bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-lg text-gray-300 font-bold'>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex gap-6 items-center my-2'>
                            <h1 className='text-xl font-bold text-white'>Link</h1>
                            <div className='flex items-center gap-6'>
                                <a target="_blank" href="https://limitless-bangladesh.web.app" className='text-xl text-white'>🔗</a>
                                <a target="_blank" href="https://github.com/Mubasshir14/limitless-bangladesh" className='text-white text-xl'>
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
                
            </div> */}

        </div>
    )
}
