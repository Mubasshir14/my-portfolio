import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className="max-w-[1200px] sm:h-[150px] p-12 flex flex-col sm:flex-row justify-between items-center bg-gray-900 text-white mx-auto rounded-lg shadow-lg">
            <span className="text-2xl font-bold primary-color mb-4 sm:mb-0">Mubasshir</span>
            <div className="text-center sm:text-left mb-4 sm:mb-0">
                <p className="text-gray-400 text-center">mubasshiralkasshaf22@gmail.com <br /> #dev2024</p>
                <p className="text-gray-400"></p>
            </div>
            <div className="flex space-x-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaGithub size={24} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            </div>
        </div>
    )
}
