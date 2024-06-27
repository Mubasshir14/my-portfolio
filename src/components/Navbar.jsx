import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold primary-color ml-4 font-cinzel">Mubasshir</h1>
                <ul className="hidden md:flex">
                    <li className="p-5"><a href="#about">About</a></li>
                    <li className="p-5"><a href="#work">Project</a></li>
                    <li className="p-5"><a href="#skill">Skills</a></li>
                    <li className="p-5"><a href="#contact">Contact</a></li>
                </ul>
                <div onClick={handleNav} className="block md:hidden mr-6">
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <h1 className="text-3xl font-bold primary-color ml-4 my-4">Mubasshir</h1>
                    <ul className="flex flex-col">
                        <li className="p-5 border-b border-gray-600"><a href="about">About</a></li>
                        <li className="p-5 border-b border-gray-600"><a href="work">Project</a></li>
                        <li className="p-5 border-b border-gray-600"><a href="skill">Skills</a></li>
                        <li className="p-5"><a href="contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
