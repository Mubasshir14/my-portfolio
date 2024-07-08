/* eslint-disable react/no-unescaped-entities */
import heroimage from '../assets/image.png';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
            <div className='mx-auto my-auto w-[300px] h-auto lg:w-[400px] block md:hidden'>
                <img src={heroimage} alt="Profile" />
            </div>
            <div className="col-span-2 px-5">
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                    <span className='primary-color'>I'm a</span> <br />
                    <TypeAnimation
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "Web Designer",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity} />
                </h1>
                <div className='my-8'>
                    <a
                        className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'
                        href="https://drive.google.com/uc?export=download&id=1IYAEkZ6OzgcABwzA1ChwaFfRAlkzno6_"
                        download="Mubasshir_CV.pdf">
                        Download CV 
                    </a>
                    <a
                        className='px-6 py-3 w-full rounded-xl mr-4 border-gray-400 border-2 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'
                        href="#contact" >
                        Contact
                    </a>
                </div>
            </div>
            <div className='mx-auto my-auto w-[300px] h-auto lg:w-[400px] hidden md:block'>
                <img src={heroimage} alt="Profile" />
            </div>
        </div>
    );
};
