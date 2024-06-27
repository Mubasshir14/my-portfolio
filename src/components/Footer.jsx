import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900  max-w-[1200px] mx-auto rounded-lg shadow-lg">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center text-center">

                        <span className="text-2xl font-bold primary-color mb-4 sm:mb-0 hover:scale-105 hover:transition-all ease-in-out font-cinzel">Mubasshir</span>


                        <div className="flex flex-wrap justify-center mt-6 -mx-4">
                            <a href="#contact" className="mx-4 text-sm text-white transition-colors duration-300 hover:text-blue-500 ">mubasshiralkasshaf22@gmail.com</a>
                            {/* <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Home</a>
                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">About</a>
                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Teams</a>
                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Privacy</a>
                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Cookies</a> */}
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-white">© Copyright 2024. All Rights Reserved.</p>

                        <div className="flex -mx-2 text-white">
                            <a href="#" className="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIn">
                                <FaLinkedin className="w-5 h-5" />
                            </a>

                            <a href="#" className="mx-2  transition-colors duration-300 = hover:text-blue-500 dark:hover:text-blue-400" aria-label="Twitter">
                                <FaTwitter className="w-5 h-5" />
                            </a>

                            <a href="#" className="mx-2  transition-colors duration-300 = hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
