import { FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
import p from '../assets/p1.png'
import { FaUpwork } from 'react-icons/fa6';
export const Footer = () => {
    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='max-w-[1200px] mx-auto'>
            <footer className="bg-gray-900 text-white px-4 divide-y">
                <div className="container mx-auto py-10 space-y-8 lg:space-y-0 grid grid-col1 md:grid-cols-3 justify-around">
                    <div className="flex flex-col items-center lg:items-start">
                        <a
                        to="#"
                        onClick={(e) => {
                            e.preventDefault();  
                            scrollToSection('#top');  
                        }}
                        href="#top" rel="noopener noreferrer" className="flex items-center space-x-3">

                            <span className="text-2xl font-semibold font-cinzel primary-color"><img src={p} alt="" className="w-[200px]" /></span>
                        </a>
                    </div>
                    <div className="space-y-3 text-center">
                        <ul className="space-y-1">
                            <li><a href="#top" rel="noopener noreferrer" className="hover:underline">Home</a></li>
                            <li><a href="#work" rel="noopener noreferrer" className="hover:underline">Project</a></li>
                            <li><a href="#skill" rel="noopener noreferrer" className="hover:underline">Skills</a></li>
                            <li><a href="#contact" rel="noopener noreferrer" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3 text-center text-white">
                        <div className="flex justify-center space-x-3">
                            <a target="_blank" href="https://www.upwork.com/freelancers/~015a30484b93877d28?mp_source=share" rel="noopener noreferrer" title="Upwork" className="text-white text-2xl">
                                <FaUpwork />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/mubasshiralkasshaf" rel="noopener noreferrer" title="LinkedIn" className="text-white text-2xl">
                                <FaLinkedin />
                            </a>
                            <a target="_blank" href="https://github.com/Mubasshir14" rel="noopener noreferrer" title="Github" className="text-white text-2xl">
                                <FaGithub />
                            </a>
                            <a target="_blank" href="https://www.facebook.com/mubasshir.alkasshaf.5?mibextid=ZbWKwL" rel="noopener noreferrer" title="Facebook" className="text-white text-2xl">
                                <FaFacebook />
                            </a>

                            {/* <a target="_blank" href="#" rel="noopener noreferrer" title="Twitter" className="text-white text-2xl">
                                <FaTwitter />
                            </a>
                            <a target="_blank" href="#" rel="noopener noreferrer" title="Instagram" className="text-white text-2xl">
                                <FaInstagram />
                            </a> */}
                        </div>
                        <div className='flex flex-col'>
                            <a href="#" rel="noopener noreferrer" title="Gmail" className="text-white text-lg">
                                mubasshiralkasshaf22@gmail.com
                            </a>
                            <p href="#" rel="noopener noreferrer" title="Mobile" className="text-white text-lg">
                                01317110909
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-center text-sm italic text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Mubasshir. All rights reserved.</p>
                    {/* <small className='text-gray-700'>Developed By Mubasshir</small> */}
                </div>
            </footer>
        </div>
    );
};