import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import p from '../assets/p1.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleLinkClick = () => {
        setNav(false);
    };

    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="top">
            <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold primary-color ml-4 font-cinzel">
                    <img src={p} alt="Logo" className="w-[200px]" />
                </h1>
                <ul className="hidden md:flex">
                    <li className="p-5">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#about');
                        }}>About</a>
                    </li>
                    <li className="p-5">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#work');
                        }}>Project</a>
                    </li>
                    <li className="p-5">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#skill');
                        }}>Skills</a>
                    </li>
                    <li className="p-5">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#contact');
                        }}>Contact</a>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden mr-6">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Menu */}
                <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <h1 className="text-3xl font-bold primary-color ml-4 my-4">
                        <img src={p} alt="Logo" className="w-[200px]" />
                    </h1>
                    <ul className="flex flex-col">
                        <li className="p-5 border-b border-gray-600">
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#about');
                                handleLinkClick();
                            }}>About</a>
                        </li>
                        <li className="p-5 border-b border-gray-600">
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#work');
                                handleLinkClick();
                            }}>Project</a>
                        </li>
                        <li className="p-5 border-b border-gray-600">
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#skill');
                                handleLinkClick();
                            }}>Skills</a>
                        </li>
                        <li className="p-5">
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('#contact');
                                handleLinkClick();
                            }}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
