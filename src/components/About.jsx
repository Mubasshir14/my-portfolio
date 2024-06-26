/* eslint-disable react/no-unescaped-entities */
import about from '../assets/about.jpg'

export const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex  '>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me!</h2>
                    <p className='text-base lg:text-lg'>With over a year of experience in web design and development, I specialize in creating visually appealing and user-friendly websites. My skills include HTML, CSS, JavaScript, Tailwind, ReactJs, and modern frontend frameworks. I excel in developing clean, efficient, and maintainable code, implementing modern web technologies, and designing intuitive UI/UX that aligns with client needs. Passionate about continuous learning and staying updated with industry trends, I am committed to delivering cutting-edge web solutions. Let's connect and create something amazing together!</p>
                </div>
            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={about} alt="" height={300} width={300} />

        </div>
    </div>
  )
}
