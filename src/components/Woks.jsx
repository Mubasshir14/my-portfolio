import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
// import proj3 from '../assets/proj3.png';
import three from '../assets/design.png'
// import proj4 from '../assets/proj4.png';
// import proj5 from '../assets/proj5.png';
// import proj6 from '../assets/proj6.png';

export const Woks = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className="pb-8 text-center">
            <p className='text-4xl mb-3 font-bold primary-color'>Project</p>
            <p className='text-gray-400'>Check Out Some Of My Project</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                <img src={proj1} alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                <a target="_blank" href="https://simple-e-commerse-website.netlify.app/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>E-COMMERCE WEBSITE WITH REACT.JS</button></a>
                    <a href="/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                <img src={proj2}  alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                <a target="_blank" href="https://simple-e-commerse-website.netlify.app/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>E-COMMERCE WEBSITE WITH REACT.JS</button></a>
                    <a href="/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  h-[200px] bg-cover relative'>
                <img src={three} alt="" />

                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>

                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                <a target="_blank" href="https://simple-e-commerse-website.netlify.app/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>E-COMMERCE WEBSITE WITH REACT.JS</button></a>
                    <a target="_blank" href="https://simple-e-commerse-website.netlify.app/"><button className='text-cen4 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button></a>

                </div>

                </div>

            </div>

        </div>

    </div>
  )
}
